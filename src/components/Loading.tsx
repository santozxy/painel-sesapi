import { MagnifyingGlass } from "react-loader-spinner";

export function Loading() {
  return (
    <div className="flex justify-center items-center h-80">
      <h1 className="text-2xl font-semibold text-terciary-dark">
        Carregando...
      </h1>
      <MagnifyingGlass color="#2f2f2f" height={100} width={100} />
    </div>
  );
}
