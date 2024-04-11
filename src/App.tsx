/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { Header } from "./components/Header";
import { BoxDateTime } from "./components/BoxDateTime";
import { SearchBar } from "./components/SearchBar";
import { ProcessDTO, Unids } from "./services/process/processDTO";
import { searchProcess } from "./services/process/processService";
import { CardList } from "./components/CardList";

function App() {
  const [process, setProcess] = useState("");
  const [data, setData] = useState<ProcessDTO>();
  const [loading, setLoading] = useState(false);
  const [dataFilterUnit, setDataFilterUnit] = useState<Unids>({});

  const fetchData = async () => {
    setLoading(true);
    if (process.length === 20) {
      const processStr = process.replace(/[^\w\s]/g, "");
      try {
        const response = await searchProcess(processStr);
        if (response) {
          const filteredUnids = Object.entries(response.unids)
            .filter(([_, unidData]) => {
              const firstKey = Object.keys(unidData)[0];
              return unidData[firstKey].group !== "OUTROS";
            })
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {} as Unids);

          setDataFilterUnit(filteredUnids);
          setData(response);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log("Rsakdhsaiduashnkph2nzkiph2zink");
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

  //00012.011537/2024-41
  return (
    <div className="flex-col flex gap-10 pb-20">
      <BoxDateTime />
      <Header />
      <SearchBar process={process} setProcess={setProcess} />
      <h1 className="text-xl text-center font-medium mt-10">
        {data?.typeDescription ?? "Pesquise por um protocolo"}
      </h1>
      <div className="mt-4">
        <CardList data={dataFilterUnit} />
      </div>
    </div>
  );
}

export default App;
