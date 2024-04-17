/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback, useEffect, useState } from "react";

interface Props {
  setProcess: (process: string) => void;
  loading: boolean;
}

const KEY_SEARCHS = "searchs";
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
  const [search, setSearch] = useState<string>("");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [lastSearchs, setLastSearchs] = useState<string[]>([]);
  const [isValueValid, setIsValueValid] = useState<boolean>(true);
  const [showSelect, setShowSelect] = useState<boolean>(false);

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

  // Função para salvar a pesquisa no localStorage
  const saveSearchToStorage = useCallback((search: string) => {
    const searchHistory = getSearchHistoryFromStorage();
    if (!searchHistory.includes(search)) {
      const updatedHistory = [...searchHistory, search];
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
  }, []);
  // Função para obter o histórico de pesquisa do localStorage
  function getSearchHistoryFromStorage() {
    const searchHistory = localStorage.getItem("searchHistory");
    setLastSearchs(searchHistory ? JSON.parse(searchHistory) : []);
    return searchHistory ? JSON.parse(searchHistory) : [];
  }
  // Função para remover uma pesquisa do localStorage
  function removeSearchFromStorage() {
    setLastSearchs([]);
    localStorage.removeItem("searchHistory");
  }

  // useEffect(() => {
  //   getSearchHistoryFromStorage();
  // }, [currentSearch]);

  useEffect(() => {
    if (search.length === 20) {
      setProcess(search);
      setCurrentSearch(search);
      saveSearchToStorage(search);
      setShowSelect(false);
      setSearch("");
    }
  }, [search, setProcess, saveSearchToStorage]);

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
          onFocus={() => setShowSelect(true)}
        />

        {/* {lastSearchs?.length > 0 && showSelect && (
          <div className="flex flex-col gap-3 mt-5 w-96 h-60 max-sm:w-80 absolute rounded-md bg-white shadow-md top-8">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-sm text-start font-medium">Histórico:</h2>
              <button
                onClick={() => {
                  removeSearchFromStorage();
                }}
                className="text-sm text-red-500 hover:text-red-700 font-medium"
              >
                Limpar histórico
              </button>
            </div>
            <div className="flex flex-col  overflow-y-scroll gap-1 ">
              {lastSearchs.map((search, index) => (
                <button
                  key={index}
                  className="p-2 w-full rounded-sm border-primary  hover:bg-blue-400"
                  onClick={() => setSearch(search)}
                >
                  <p className="text-terciary-dark text-left hover:bg-blue-400 text-sm font-medium">
                    {search}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )} */}
      </div>
      {!isValueValid && (
        <p className="flex text-red-500 self-start text-sm text-left mt-2">
          Digite apenas números!
        </p>
      )}
    </div>
  );
}
