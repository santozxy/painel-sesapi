/* eslint-disable @typescript-eslint/no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@components/Header";
import { Box, List } from "lucide-react";
import SearchBar from "@components/SearchBar";
import { ProcessDTO } from "@services/process/processDTO";
import { useEffect, useState } from "react";
import { searchProcess } from "@services/process/process";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { BoxDateTime } from "@components/BoxDateTime";

function App() {
  const [process, setProcess] = useState("");
  const [data, setData] = useState<ProcessDTO>();

  useEffect(() => {
    if (process.length === 20) {
      const processStr = process.replace(/[^\w\s]/g, "");
      searchProcess(processStr)
        .then((response) => {
          setData(response);
          console.log(response);
        })
        .catch((error) => {
          if (AxiosError) {
            toast.error("Erro ao buscar processo");
          }
        });
    }
  }, [process]);
  return (
    <div className="flex-col flex gap-10">
      <BoxDateTime />
      <Header />
      <SearchBar process={process} setProcess={setProcess} />
      <h1 className="text-xl text-center font-medium mt-10">
        {data?.typeDescription ?? "Pesquise por um protocolo"}
      </h1>
      {data?.protocolo && <div className="flex gap-10 justify-center"></div>}
    </div>
  );
}

export default App;
