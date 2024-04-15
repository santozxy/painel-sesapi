/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextSearch, Search } from "lucide-react";

interface Props {
  setProcess: (process: string) => void;
  process?: string;
}
function formatProcessNumber(input: string): string {
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

export function SearchBar({ process, setProcess }: Props) {
  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const previousValue = process || ""; // Valor anterior
    const formattedValue = formatProcessNumber(inputValue);
    // Ver se houve uma adição ou remoção de caracteres
    if (formattedValue.length > previousValue.length) {
      setProcess(formattedValue);
    } else {
      setProcess(inputValue);
    }
  };

  return (
    <div className="flex-col z-10 flex justify-center items-center">
      <div className="relative w-96 flex justify-center items-center rounded-md border-2 border-border shadow-md max-sm:w-80">
        <input
          maxLength={20}
          value={process}
          onChange={handleValidation}
          placeholder="Digite o número do protocolo"
          id="protocol"
          className="w-96 rounded-md p-2 text-terciary-dark placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
        <span className="rounded-md absolute right-0 p-2 items-center justify-center">
          <TextSearch color="#1094DE" size={30} />
        </span>
      </div>
    </div>
  );
}
