import { Header } from "@components";

export function NotFound() {
  return (
    <>
      <Header />
      {/* <ThemeSwitcher /> */}
      <div className="flex flex-col  justify-center items-center h-screen bg-background dark:bg-terciary-dark">
        <div className="flex flex-col gap-4 justify-center items-center shadow-xl p-14  rounded-lg border-[#eaeaea] ">
          <h1 className="font-extralight w-full text-center pb-2 text-[#dc4343] text-9xl border-b">
            404
          </h1>
          <h1 className="text-4xl font-extralight text-[#dc4343]">
            Página não encontrada
          </h1>
        </div>
      </div>
    </>
  );
}
