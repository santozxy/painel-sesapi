/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@components/Header";
import { Box, List } from "lucide-react";
import { SearchBar } from "@components/SearchBar";
import { ProcessDTO } from "@services/process/processDTO";
import { useEffect, useState } from "react";
import { searchProcess } from "@services/process/processService";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { BoxDateTime } from "@components/BoxDateTime";
import { Card } from "@components/Card";

function App() {
  const [process, setProcess] = useState("");
  const [data, setData] = useState<ProcessDTO>();
  const [dataFilterUnit, setDataFilterUnit] = useState<
    [string, Record<string, any>][]
  >([]);

  useEffect(() => {
    if (process.length === 20) {
      const processStr = process.replace(/[^\w\s]/g, "");
      searchProcess(processStr)
        .then((response) => {
          if (response) {
            const filteredUnids = Object.entries(response.unids).filter(
              ([_, unidData]) =>
                unidData[Object.keys(unidData)[0]].group !== "OUTROS"
            );
            console.log(filteredUnids);
            setDataFilterUnit(filteredUnids);
            setData(response);
            console.log(response);
          }
        })
        .catch((error) => {
          if (AxiosError) {
            toast.error("Erro ao buscar processo");
          }
        });
    }
  }, [process]);
  // 00012011537202441
  return (
    <div className="flex-col flex gap-10">
      <BoxDateTime />
      <Header />
      <SearchBar process={process} setProcess={setProcess} />
      <h1 className="text-xl text-center font-medium mt-10">
        {data?.typeDescription ?? "Pesquise por um protocolo"}
      </h1>
    </div>
  );
}

export default App;
