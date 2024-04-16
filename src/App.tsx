/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { isAxiosError } from "axios";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Detail, ProcessData } from "./services/process/processDTO";
import { searchProcess } from "./services/process/processService";
import { Loading } from "@components/Loading";
import { getDataDetailed, getDataGrouped } from "@utils/FiltersProcess";
import { CardListResume } from "@components/CardListResume";
import { BoxDurationProcess } from "@components/BoxDurationProcess";
import { TableProcess } from "@components/TableProcess";
import { set } from "date-fns";

function App() {
  const [process, setProcess] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProcessData>();
  const [dataGrouped, setDataGrouped] = useState<Detail[]>([]);
  const [dataDetailed, setDataDetailed] = useState<Detail[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const processStr = process.replace(/[^\w\s]/g, "");
    console.log(processStr);
    try {
      const response = await searchProcess(processStr);
      if (response) {
        const dataGrouped = getDataGrouped(response.grouped);
        const filteredGroup = dataGrouped.filter(
          (data) => data.group !== "OUTROS"
        );
        const dataDetailed = getDataDetailed(response.detailed);
        setDataGrouped(filteredGroup);
        setDataDetailed(dataDetailed);
        setData(response);
        setProcess("");
      }
      setLoading(false);
    } catch (error) {
      setData(undefined);
      setDataGrouped([]);
      setDataDetailed([]);
      setProcess("");
      setLoading(false);
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Erro ao buscar processo");
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if ((/^[\d./-]*$/.test(process)) || process === "") {
      if (process.length === 20) {
        fetchData();
      }
    } else {
      const formattedValue = process.substring(0, process.length - 1);
      setProcess(formattedValue);
      toast.error("O processo deve conter apenas números");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process]);

  return (
    <div className="flex-col flex gap-10 pb-20">
      <Header />
      <ToastContainer pauseOnHover={false} />
      <BoxDurationProcess duration={data?.duration} process={data?.protocolo} />
      <div className="flex gap-5 flex-wrap-reverse justify-center items-center mt-20 max-sm:mt-60">
        <SearchBar process={process} setProcess={setProcess} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex gap-2 justify-center items-center max-sm:flex-col">
            <h1 className="text-xl text-center font-bold mt-5 max-sm:text-base">
              {data?.typeDescription
                ? `Tipo de Processo: `
                : "Pesquise por um processo"}
            </h1>
            <h1 className="text-xl text-center font-medium mt-5 max-sm:text-base">
              {data?.typeDescription}
            </h1>
          </div>
          <div className="mt-4">
            <CardListResume data={dataGrouped} />
          </div>
          <div className="mx-5 mb-10">
            {dataDetailed && dataDetailed.length > 0 && (
              <TableProcess data={dataDetailed} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
