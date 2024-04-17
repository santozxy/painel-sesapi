import "react-toastify/dist/ReactToastify.css";
import { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { isAxiosError } from "axios";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Detail, ProcessData } from "./services/process/processDTO";
import { searchProcess } from "./services/process/processService";
import { Loading } from "@components/Loading";
import { getDataDetailed, getDataGrouped } from "@utils/filtersProcess";
import { ListCards } from "@components/ListCards";
import { BoxDurationProcess } from "@components/BoxDurationProcess";
import { TableProcess } from "@components/TableProcess";
function App() {
  const [process, setProcess] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProcessData>();
  const [dataGrouped, setDataGrouped] = useState<Detail[]>([]);
  const [dataDetailed, setDataDetailed] = useState<Detail[]>([]);
  const [dataFilterOthers, setDataFilterOthers] = useState<Detail[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const processStr = process.replace(/[^\w\s]/g, "");
    try {
      const response = await searchProcess(processStr);
      if (response) {
        const dataGrouped = getDataGrouped(response.grouped);
        const dataDetailed = getDataDetailed(response.detailed);
        const filteredGroup = dataGrouped.filter(
          (data) => data.group !== "OUTROS"
        );
        const filteredOthers = dataGrouped.filter(
          (data) => data.group === "OUTROS"
        );
        setDataGrouped(filteredGroup);
        setDataFilterOthers(filteredOthers);
        setDataDetailed(dataDetailed);
        setData(response);
        setProcess("");
      }
      setLoading(false);
    } catch (error) {
      setData(undefined);
      setDataGrouped([]);
      setDataFilterOthers([]);
      setDataDetailed([]);
      setProcess("");
      setLoading(false);
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Erro ao buscar processo");
      } else {
        console.error(error);
      }
    }
  }, [process]);

  useEffect(() => {
    if (process.length === 20) {
      fetchData();
    }
  }, [fetchData, process]);

  return (
    <div className="flex-col flex gap-10 pb-20">
      <Header />
      <ToastContainer pauseOnHover={false} />
      <BoxDurationProcess duration={data?.duration} process={data?.protocolo} />
      <div className="flex gap-5 flex-wrap-reverse justify-center items-center mt-20 max-sm:mt-60">
        <SearchBar loading={loading} setProcess={setProcess} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center mt-5">
          {dataGrouped.length > 0 && (
            <ListCards data={dataGrouped} type={"Tramitação Dentro do Fluxo"} />
          )}
          {dataFilterOthers.length > 0 && (
            <ListCards data={dataFilterOthers} type={"Tramitação Fora do Fluxo"} />
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
