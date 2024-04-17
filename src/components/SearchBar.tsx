import { useEffect, useState } from "react";

interface Props {
  setProcess: (process: string) => void;
  loading: boolean;
}

function formatProcessNumber(input: string) {
  const numericValue = input.replace(/[\D\s]/g, "");

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
  const [search, setSearch] = useState<string>("00012.");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  //const [lastSearchs, setLastSearchs] = useState<string[]>([]);
  const [isValueValid, setIsValueValid] = useState<boolean>(true);

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
    if (search.length === 20) {
      setProcess(search);
      setCurrentSearch(search);
      setSearch("");
    }
  }, [search, setProcess]);

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
          type="search"
          placeholder="Digite o número do protocolo"
          id="protocol"
          className="w-96 rounded-md p-2 text-terciary-dark outline-none placeholder:text-gray-400  max-sm:text-sm sm:leading-6"
        />
      </div>
      {!isValueValid && (
        <p className="flex text-red-500 self-start text-sm text-left mt-2">
          Digite apenas números!
        </p>
      )}
    </div>
  );
}
