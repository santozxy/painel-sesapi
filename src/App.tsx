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

function App() {
  const [process, setProcess] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProcessData>();
  const [dataGrouped, setDataGrouped] = useState<Detail[]>([]);
  const [dataDetailed, setDataDetailed] = useState<Detail[]>([]);

  const fetchData = async () => {
    if (process.length === 20) {
      setLoading(true);
      const processStr = process.replace(/[^\w\s]/g, "");
      try {
        const response = await searchProcess(processStr);
        if (response) {
          const dataGrouped = getDataGrouped(response.grouped);
          const dataDetailed = getDataDetailed(response.detailed);
          setDataGrouped(dataGrouped);
          setDataDetailed(dataDetailed);
          setData(response);
        } else {
          toast.error("Processo não encontrado", {
            autoClose: 3000,
            draggable: true,
            position: "top-right",
          });
          setData(undefined);
          setDataGrouped([]);
          setDataDetailed([]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (isAxiosError(error)) {
          toast.error("Erro ao buscar o processo");
          console.log(error.response?.data);
        } else {
          console.error(error);
        }
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process]);

  return (
    <div className="flex-col flex gap-10 pb-20">
      <Header />
      <ToastContainer />
      <BoxDurationProcess duration={data?.duration} />
      <div className="flex gap-5 flex-wrap-reverse justify-center items-center mt-20">
        <SearchBar process={process} setProcess={setProcess} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-xl text-center font-medium mt-5">
            {data?.typeDescription}
          </h1>
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
