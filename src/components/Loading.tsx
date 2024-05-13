import { Search } from "lucide-react";

export function Loading() {
  return (
    <div className="flex gap-2 justify-center items-center h-80 max-sm:h-56">
      <h1 className="text-2xl font-semibold text-dark dark:text-light max-sm:text-lg">
        Carregando...
      </h1>
      <Search size={30} className="text-dark dark:text-light animate-bounce"  />
    </div>
  );
}
