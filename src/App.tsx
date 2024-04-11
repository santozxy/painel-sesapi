/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { isAxiosError } from "axios";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import {
  DetailResume,
  ProcessDTO,
  ProcessDTOResume,
  Unids,
  UnidsResume,
} from "./services/process/processDTO";
import { searchProcess } from "./services/process/processService";
import { CardListDetailed } from "./components/CardListDetailed";
import { Loading } from "@components/Loading";
import { dataResumeObj, filterUnit } from "@utils/FiltersProcess";
import { CardListResume } from "@components/CardListResume";
import { BoxDurationProcess } from "@components/BoxDurationProcess";
import { Table } from "lucide-react";
import { TableProcess } from "@components/TableProcess";

function App() {
  const [process, setProcess] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataInfo, setDataInfo] = useState<ProcessDTO>();
  const [dataFilterUnit, setDataFilterUnit] = useState<Unids>({});
  const [dataResume, setDataResume] = useState<DetailResume[] | undefined>([]);
  const [mode, setMode] = useState<number>(1);

  const fetchData = async () => {
    if (process.length === 20) {
      setLoading(true);
      const processStr = process.replace(/[^\w\s]/g, "");
      try {
        const response = await searchProcess(processStr, mode);
        /* if (response && mode === 0) {
           const filterMainUnids = filterUnit(response.unids, "OUTROS", true);
           const filterUnidsOthers = filterUnit(response.unids, "OUTROS", false);
           setDataFilterUnit(filterMainUnids);
         */
        if (response) {
          const dataResume = dataResumeObj(response?.unids);
          setDataResume(dataResume);
          setDataInfo(response);
        } else {
          toast.error("Processo não encontrado", {
            autoClose: 3000,
            draggable: true,
            position: "top-right",
          });
          setDataResume([]);
          setDataInfo(undefined);
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
  }, [process, mode]);

  return (
    <div className="flex-col flex gap-10 pb-20">
      <ToastContainer />
      <BoxDurationProcess duration={dataInfo?.duration} />
      <Header />
      <div className="flex gap-5 flex-wrap-reverse  justify-center items-center">
        {/* <button
          className={`p-2 ${
            mode === 0 ? "bg-primary opacity-100" : "bg-primary opacity-70"
          } text-terciary-light rounded-md cursor-pointer `}
          onClick={() => setMode(0)}
        >
          Detalhado
        </button>
        <button
          className={`p-2 ${
            mode === 1 ? "bg-primary opacity-100" : "bg-primary opacity-70"
          } text-terciary-light rounded-md cursor-pointer`}
          onClick={() => setMode(1)}
        >
          Resumido
        </button> */}
        <SearchBar process={process} setProcess={setProcess} />
      </div>
      {loading ? (
        <Loading />
      ) : mode === 0 ? (
        <>
          <h1 className="text-xl text-center font-medium mt-5">
            {dataInfo?.typeDescription}
          </h1>
          <div className="mt-4">
            <CardListDetailed data={dataFilterUnit} />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-xl text-center font-medium mt-5">
            {dataInfo?.typeDescription}
          </h1>
          <div className="mt-4">
            <CardListResume data={dataResume ?? []} />
          </div>
          <div className="mx-5 mb-10">
            {dataResume && dataResume.length > 0 && (
              <TableProcess data={dataResume ?? []} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
