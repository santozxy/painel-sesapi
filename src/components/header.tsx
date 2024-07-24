import LogoSei from "@assets/logo-sei.webp";
import LogoGovPI from "@assets/logo-gov-pi.webp";

export default function Header() {
  return (
    <div className="fixed border-b z-50 mb-10 top-0 right-0 w-full h-20 max-md:h-24 bg-white dark:bg-dark justify-between items-center flex  shadow-md dark:shadow-xl dark:border-gray-500 flex-wrap max-sm:flex-col max-sm:gap-5 px-3">
      <div className="flex gap-5 justify-between items-center">
        <img
          src={LogoSei}
          className="object-contain"
          alt="Logo do SEI"
          width={80}
          height={80}
        />
        <img
          alt="Logo do do GOV PI"
          src={LogoGovPI}
          className="hidden max-sm:block object-contain"
          width={80}
          height={80}
        />
      </div>
      <h1 className="md:text-xl lg:text-2xl text-dark dark:text-light max-sm:text-base">
        Secretaria da Saúde - SESAPI
      </h1>
      <img
        src={LogoGovPI}
        alt="Logo do GOV PI"
        className="max-sm:hidden object-contain"
        loading="lazy"
        width={"80px"}
        height={"80px"}
      />
    </div>
  );
}
