/* eslint-disable @typescript-eslint/no-unused-vars */
import { set } from "date-fns";
import { se } from "date-fns/locale/se";
import { TextSearch, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  setProcess: (process: string) => void;
  loading: boolean;
}

const KEY_SEARCHS = "searchs";
function formatProcessNumber(input: string) {
  const numericValue = input.replace(/\D/g, "");

  // Formatar o número parcialmente conforme o usuário digita
  let formattedValue = "";
  if (numericValue.length >= 5) {
    formattedValue += numericValue.slice(0, 5) + ".";
  }
  if (numericValue.length >= 11) {
    formattedValue += numericValue.slice(5, 11) + "/";
  }
  if (numericValue.length >= 15) {
    formattedValue += numericValue.slice(11, 15) + "-";
  }
  if (numericValue.length >= 17) {
    formattedValue += numericValue.slice(15, 17);
  }

  return formattedValue;
}
const regex = /^(\d{5})?\.?(\d{6})?\/?(\d{0,4})?-?(\d{0,2})$/;

export function SearchBar({ setProcess, loading }: Props) {
  const [search, setSearch] = useState<string>("");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [lastSearchs, setLastSearchs] = useState<string[]>([]);
  const [isValueValid, setIsValueValid] = useState<boolean>(true);
  const [searchsStorage, setSearchsStorage] = useState<string[]>([]);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const previousValue = search || "";
    const formattedValue = formatProcessNumber(inputValue);
    // Ver se houve uma adição ou remoção de caracteres
    if (regex.test(inputValue)) {
      setIsValueValid(true);
      if (formattedValue.length > previousValue.length) {
        setSearch(formattedValue);
      } else {
        setSearch(inputValue);
      }
    } else {
      setIsValueValid(false);
    }
  };

  const saveSearchsStorage = (searchs: string[]) => {
    const filteredSearchs = searchs.flatMap((search) => search);
    console.log(filteredSearchs);
    localStorage.setItem(KEY_SEARCHS, JSON.stringify(filteredSearchs));
  };

  const removeSearchsStorage = () => {
    localStorage.removeItem(KEY_SEARCHS);
    toast.success("Histórico limpo com sucesso!");
  };

  const getSearchsStorage = () => {
    const searchs = localStorage.getItem(KEY_SEARCHS);
    if (searchs) {
      setLastSearchs(JSON.parse(searchs));
      return;
    }
    return [];
  };

  const filteredSearchs = lastSearchs
    .filter((search) => search !== currentSearch)
    .flatMap((search) => search);

  useEffect(() => {
    getSearchsStorage();
  }, []);

  useEffect(() => {
    if (search.length === 20) {
      setProcess(search);
      setCurrentSearch(search);
      setLastSearchs((prev) => {
        return [search, ...prev];
      });
      saveSearchsStorage(lastSearchs);
      setSearch("");
    }
  }, [search, setProcess, lastSearchs]);

  return (
    <div className="flex-col z-10 flex">
      {currentSearch && (
        <div className="flex flex-col gap-3 w-96 max-sm:w-80">
          <p
            className="p-2  rounded-tr-md rounded-tl-md bg-primary text-terciary-light text-sm max-sm:text-[13px] font-medium"
            title="Processo pesquisado"
          >
            Resultado da pesquisa:{"  "}
            {currentSearch}
          </p>
        </div>
      )}
      <div
        className={`relative w-96 flex justify-center items-center ${
          currentSearch
            ? "border-top-0 border-b-2 border-x-2 rounded-br-md rounded-bl-md"
            : "border-2 rounded-md"
        }   ${
          isValueValid ? "border-border" : "border-red-500"
        } shadow-md max-sm:w-80`}
      >
        <input
          maxLength={20}
          value={search}
          onChange={handleValidation}
          disabled={loading}
          placeholder="Digite o número do protocolo"
          id="protocol"
          className="w-96 rounded-md p-2 text-terciary-dark outline-none placeholder:text-gray-400  max-sm:text-sm sm:leading-6"
        />
        <span className="rounded-md absolute right-0 p-2 items-center justify-center">
          <TextSearch color="#1094DE" size={30} />
        </span>
      </div>
      {!isValueValid && (
        <p className="flex text-red-500 self-start text-sm text-left mt-2">
          Digite apenas números!
        </p>
      )}
      {filteredSearchs.length > 0 && (
        <div className="flex flex-col gap-3 mt-5 w-96 max-sm:w-80">
          <div className="flex justify-between items-center">
            <h2 className="text-sm text-start font-medium">Histórico:</h2>
            <button
              onClick={() => {
                setLastSearchs([]);
                removeSearchsStorage();
              }}
              className="text-sm text-red-500 hover:text-red-700 font-medium"
            >
              Limpar histórico
            </button>
          </div>
          <div className="flex overflow-x-scroll gap-4 ">
            {filteredSearchs.map((search, index) => (
              <button
                key={index}
                className=" p-2 border-b-2 rounded-md border-primary bg-primary round hover:bg-blue-400 "
                onClick={() => setSearch(search)}
              >
                <p className="text-terciary-light hover:bg-blue-400 text-sm w-56 font-medium">
                  {search}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
