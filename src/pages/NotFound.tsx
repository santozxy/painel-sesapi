import { Header } from "@components";

export function NotFound() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-background">
        <h1 className="text-6xl max-sm:text-3xl text-red-400 animate-bounce">
          Error 404: Page Not Found
        </h1>
      </div>
    </>
  );
}
