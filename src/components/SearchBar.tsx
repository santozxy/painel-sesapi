/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextSearch } from "lucide-react";
import { useState } from "react";

interface Props {
  setProcess: (process: string) => void;
  process?: string;
}
function SearchBar({ process, setProcess }: Props) {
  const [isValid, setIsValid] = useState(true);
  const regex = /^\d{5}\.\d{6}\/\d{4}-\d{2}$/;

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcess(e.target.value);
  };
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-12">
        <input
          maxLength={20}
          name="protocol"
          value={process}
          onChange={handleValidation}
          placeholder="Digite o número do protocolo"
          id="protocol"
          className=" w-96 rounded-md border-0 p-2 text-terciary-light shadow-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-1  focus:ring-primary sm:text-sm sm:leading-6"
        />

        <button className="rounded-md p-2 items-center justify-center">
          <TextSearch color="#1094DE" size={30} />
        </button>
      </div>
      {!isValid && (
        <p className="text-center p-2 text-red-500">
          Número inválido. Formato esperado: 00000.000000/0000-00
        </p>
      )}
    </div>
  );
}

export default SearchBar;
