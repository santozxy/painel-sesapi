import LogoSei from "../assets/logo-sei.png";
import LogoGovPI from "../assets/logo-gov-pi.png";

export function Header() {
  return (
    <div className="border-b-1 border-gray-200 justify-between items-center flex p-4 shadow-md flex-wrap max-md:flex-col">
      <img src={LogoSei} className="w-15 h-10" />
      <h1 className="text-2xl font-semibold">Secretaria da Saúde - SESAPI</h1>
      <img src={LogoGovPI} className="w-24 h-16" />
    </div>
  );
}
