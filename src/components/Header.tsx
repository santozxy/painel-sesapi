import LogoSei from "../assets/logo-sei.png";
import LogoGovPI from "../assets/logo-gov-pi.png";

export function Header() {
  return (
    <div className="fixed border-b-1 z-50 mb-10 top-0 right-0 w-full bg-white border-gray-200 justify-between items-center flex p-3 shadow-md flex-wrap max-md:flex-col max-sm:gap-5">
      <img src={LogoSei} className="w-15 h-10" />
      <h1 className="text-2xl font-semibold">Secretaria da Saúde - SESAPI</h1>
      <img src={LogoGovPI} className="w-24 h-16" />
    </div>
  );
}
