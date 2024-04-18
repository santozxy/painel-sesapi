import LogoSei from "@assets/logo-sei.png";
import LogoGovPI from "@assets/logo-gov-pi.png";

export function Header() {
  return (
    <div className="fixed border-b-1 z-50 mb-10 top-0 right-0 w-full bg-white border-gray-200 justify-between items-center flex p-3 shadow-md flex-wrap max-sm:flex-col max-sm:gap-5">
      <div className="flex gap-5 justify-between items-center">
        <img
          src={LogoSei}
          className=" w-20 h-10"
          alt="Logo do SEI"
          loading="lazy"
          width={40}
          height={80}
        />
        <img
          alt="Logo do Governo do Piauí"
          src={LogoGovPI}
          className="w-24 h-16 hidden max-sm:block"
          loading="lazy"
          width={96}
          height={64}
        />
      </div>
      <h1 className="text-2xl font-semibold max-sm:text-xl max-sm:font-medium">
        Secretaria da Saúde - SESAPI
      </h1>
      <img src={LogoGovPI} className="w-24 h-16 max-sm:hidden" loading="lazy" />
    </div>
  );
}
