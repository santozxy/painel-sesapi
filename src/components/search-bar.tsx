import { copyToClipboard,formatProcessNumber } from "@utils";
import { Copy, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  setProcess: (process: string) => void;
  loading: boolean;
}

const regex = /^(\d{5})?\.?(\d{6})?\/?(\d{0,4})?-?(\d{0,2})$/;
export default function SearchBar({ setProcess, loading }: Props) {
  const [search, setSearch] = useState<string>("00012.");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [isValueValid, setIsValueValid] = useState<boolean>(true);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[\s]/g, "").trim();
    const previousValue = search || "";
    const formattedValue = formatProcessNumber(inputValue);
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

  useEffect(() => {
    // Obter pesquisas anteriores do localStorage
    const storedSearches = localStorage.getItem("previousSearches");
    if (storedSearches) {
      setPreviousSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    if (search.length === 20) {
      setProcess(search);
      setCurrentSearch(search);
      if (!previousSearches.includes(search)) {
        // Adicionar pesquisa ao início da lista no localStorage e manter apenas as últimas 5
        const updatedSearches = [...previousSearches, search].slice(-5);
        setPreviousSearches(updatedSearches);
        localStorage.setItem(
          "previousSearches",
          JSON.stringify(updatedSearches)
        );
      }
      setSearch("");
    }
  }, [search, setProcess, previousSearches]);

  return (
    <div className="flex-col z-10 flex">
      {currentSearch ? (
        <div className="p-2 flex justify-between gap-3 w-96 max-sm:w-[22rem] bg-primary dark:bg-dark dark:border-gray-500 border border-gray-300 rounded-t-md">
          <p
            className="text-light text-sm max-sm:text-[13px] font-medium"
            title="Processo pesquisado"
          >
            <strong>Pesquisa: </strong>
            {currentSearch}
          </p>
          <button
            className="cursor-pointer text-light hover:text-[#d4d4d4]"
            title="Copiar processo"
            onClick={() => copyToClipboard(currentSearch, "Processo copiado!")}
          >
            <Copy size={20} />
          </button>
        </div>
      ) : (
        <div className=" dark:bg-dark border dark:border-gray-500 border-gray-300 p-2 flex justify-between items-center gap-3 w-96 max-sm:w-[22rem] bg-primary rounded-t-md">
          <p className=" text-light text-sm max-sm:text-[13px] font-semibold">
            Pesquise por um processo
          </p>
          <SearchIcon size={20} color="#f5f5f5" />
        </div>
      )}

      <div
        className={`relative w-96 flex justify-center items-center  border-top-0 dark:border-0 border-b border-x rounded-b-md ${
          isValueValid ? "" : "border-red-500"
        } shadow-md max-sm:w-[22rem]`}
      >
        <input
          list="previousSearches"
          maxLength={20}
          value={search}
          onChange={handleValidation}
          disabled={loading}
          type="search"
          placeholder="Digite o número do protocolo"
          id="protocol"
          className="w-96 rounded-b-md p-2 dark:rounded-b dark:rounded-t-none text-dark outline-none placeholder:text-gray-400  max-sm:text-sm sm:leading-6 disabled:bg-light"
        />
        <datalist id="previousSearches">
          {previousSearches.map((item, index) => (
            <option key={index} value={item}></option>
          ))}
        </datalist>
      </div>
      {!isValueValid && (
        <p className="flex text-red-500 self-start text-sm text-left mt-2">
          Digite apenas números!
        </p>
      )}
    </div>
  );
}
