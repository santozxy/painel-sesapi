/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextSearch, Search } from "lucide-react";
import { useState } from "react";

interface Props {
  setProcess: (process: string) => void;
  process?: string;
}
function formatProcessNumber(input: string): string {
  // Remove todos os caracteres não numéricos do input
  const numericValue = input.replace(/\D/g, "");

  // Adiciona os pontos, barra e hífen conforme o formato do processo
  return numericValue.replace(/^(\d{5})(\d{6})(\d{4})(\d{2}).*/, "$1.$2/$3-$4");
}
function SearchBar({ process, setProcess }: Props) {
  const regex = /^\d{5}\.\d{6}\/\d{4}-\d{2}$/;

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatProcessNumber(inputValue);
    setProcess(formattedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permitir a exclusão de caracteres (backspace) e outras teclas de navegação
    const key = e.key;
    const isDigit = /\d/.test(key);
    const isNavigationKey = [
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
    ].includes(key);

    if (!isDigit && !isNavigationKey) {
      e.preventDefault();
    }
  };
  return (
    <div className="flex-col flex justify-center items-center">
      <div className="relative w-96 flex justify-center items-center rounded-md border-2 border-border shadow-md max-sm:w-80">
        <input
          maxLength={20}
          value={process}
          onChange={handleValidation}
          onKeyDown={handleKeyDown}
          placeholder="Digite o número do protocolo"
          id="protocol"
          className="w-96 rounded-md p-2 text-terciary-dark placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
        <span className="rounded-md absolute right-0 p-2 items-center justify-center">
          <Search color="#1094DE" size={30} />
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
