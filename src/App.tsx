/* eslint-disable @typescript-eslint/no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@components/Header";
import SearchBar from "@components/SearchBar";
import { ProcessDTO } from "@services/process/processDTO";
import { useEffect, useState } from "react";
import { searchProcess } from "@services/process/process";
import { ToastContainer, toast } from "react-toastify";

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
          console.log(error);
        });
    }
  }, [process]);
  return (
    <div>
      <Header />
      <SearchBar process={process} setProcess={setProcess} />
    </div>
  );
}

export default App;
