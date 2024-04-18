import "react-toastify/dist/ReactToastify.css";
import { useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { isAxiosError } from "axios";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Detail } from "./services/process/processDTO";
import { searchProcess } from "./services/process/processService";
import { Loading } from "@components/Loading";
import { getDataDetailed, getDataGrouped } from "@utils/filtersProcess";
import { ListCards } from "@components/ListCards";
import { BoxDurationProcess } from "@components/BoxDurationProcess";
import { TableProcess } from "@components/TableProcess";
import { useQuery } from "@tanstack/react-query";
function App() {
  const [process, setProcess] = useState("");

  const [dataGrouped, setDataGrouped] = useState<Detail[]>([]);
  const [dataDetailed, setDataDetailed] = useState<Detail[]>([]);
  const [dataFilterOthers, setDataFilterOthers] = useState<Detail[]>([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["searchProcess", process],
    queryFn: () => searchProcess(process.replace(/[^\w\s]/g, "")),
    enabled: process.length === 20,
    initialData: undefined,
    retry: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  if (isError) {
    if (isAxiosError(error)) {
      toast.error(error.response?.data?.message || "Erro ao buscar processo");
    }
  }

  useMemo(() => {
    if (data) {
      const dataGrouped = getDataGrouped(data.grouped);
      const dataDetailed = getDataDetailed(data.detailed);
      const filteredGroup = dataGrouped.filter(
        (data) => data.group !== "OUTROS"
      );
      const filteredOthers = dataGrouped.filter(
        (data) => data.group === "OUTROS"
      );
      setDataGrouped(filteredGroup);
      setDataFilterOthers(filteredOthers);
      setDataDetailed(dataDetailed);
    } else {
      setDataGrouped([]);
      setDataFilterOthers([]);
      setDataDetailed([]);
    }
  }, [data]);

  return (
    <div className="flex-col flex gap-10 pb-20">
      <Header />
      <ToastContainer pauseOnHover={false} />
      <BoxDurationProcess duration={data?.duration} />
      <div className="flex gap-5 flex-wrap-reverse justify-center items-center mt-20 max-sm:mt-60">
        <SearchBar loading={isLoading} setProcess={setProcess} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center mt-5">
          {dataGrouped.length > 0 && (
            <ListCards
              data={dataGrouped}
              type="Tramitação Dentro do Fluxo"
              typeDescription={data?.typeDescription}
              duration={data?.mainDuration}
            />
          )}
          {dataFilterOthers.length > 0 && (
            <ListCards
              data={dataFilterOthers}
              type={"Tramitação Fora do Fluxo"}
              duration={data?.othersDuration}
            />
          )}
          <div className="mx-5 mb-10">
            {dataDetailed && dataDetailed.length > 0 && (
              <TableProcess data={dataDetailed} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
