/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { Header } from "./components/Header";
import { BoxDateTime } from "./components/BoxDateTime";
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

function App() {
  const [process, setProcess] = useState("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [dataFilterUnit, setDataFilterUnit] = useState<Unids>({});
  const [dataResume, setDataResume] = useState<DetailResume[]>([]);
  const [mode, setMode] = useState<number>(1);

  const fetchData = async () => {
    if (process.length === 20) {
      setLoading(true);
      const processStr = process.replace(/[^\w\s]/g, "");
      try {
        const response = await searchProcess(processStr, mode);
        if (response && mode === 0) {
          const filterMainUnids = filterUnit(response.unids, "OUTROS", true);
          //const filterUnidsOthers = filterUnit(response.unids, "OUTROS", false);
          setDataFilterUnit(filterMainUnids);
        }
        if (response && mode === 1) {
          const dataResume = dataResumeObj(response.unids);
          setDataResume(dataResume);
        }
        setTitle(response?.typeDescription ?? "");
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

  //00012.011537/2024-41
  return (
    <div className="flex-col flex gap-10 pb-20">
      <BoxDateTime />
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
          <h1 className="text-xl text-center font-medium mt-5">{title}</h1>
          <div className="mt-4">
            <CardListDetailed data={dataFilterUnit} />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-xl text-center font-medium mt-5">
            {title}
          </h1>
          <div className="mt-4">
            <CardListResume data={dataResume} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
