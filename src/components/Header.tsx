import LogoSei from "@assets/logo-sei.png";
import LogoGovPI from "@assets/logo-gov-pi.png";

export function Header() {
  return (
    <div className="fixed border-b z-50 mb-10 top-0 right-0 w-full bg-white dark:bg-dark justify-between items-center flex p-3 shadow-md dark:shadow-xl dark:border-gray-500 flex-wrap max-sm:flex-col max-sm:gap-5">
      <div className="flex gap-5 justify-between items-center">
        <img
          src={LogoSei}
          className="object-contain"
          alt="Logo do SEI"
          loading="lazy"
          width={"80px"}
          height={"80px"}
        />
        <img
          alt="Logo do Governo do Piauí"
          src={LogoGovPI}
          className="hidden max-sm:block object-contain"
          loading="lazy"
          width={"80px"}
          height={"80px"}
        />
      </div>
      <h1 className="text-xl font-semibold text-dark dark:text-light max-sm:text-xl max-sm:font-medium">
        Secretaria da Saúde - SESAPI
      </h1>
      <img
        src={LogoGovPI}
        alt="Logo do SEI"
        className="max-sm:hidden"
        loading="lazy"
        width={"80px"}
        height={"80px"}
      />
    </div>
  );
}
