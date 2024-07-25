import LogoSei from "@assets/logo-sei.webp";
import Logos from "@assets/logos.png";
import LogosDark from "@assets/logos-dark.png";

export default function Header() {
  return (
    <div className="fixed border-b z-50 mb-10 top-0 right-0 w-full h-24 max-md:h-24 bg-[#E8F5F8] dark:bg-dark justify-between items-center flex  shadow-md dark:shadow-xl dark:border-gray-500 flex-wrap max-sm:flex-col max-sm:gap-5 px-3">
      <div className="flex gap-5 justify-between items-center">
        <img
          src={LogoSei}
          className="object-contain"
          alt="Logo do SEI"
          width={80}
          height={80}
        />
        <img
          alt="Logos SESAPI"
          src={Logos}
          className="hidden max-sm:block object-contain dark:hidden "
          width={250}
          height={280}
        />

        <img
          alt="Logos SESAPI"
          src={LogosDark}
          className="sm:hidden object-contain max-sm:dark:block"
          width={250}
          height={280}
        />
      </div>
      <div className=" absolute left-0 right-0 w-full max-sm:bottom-0">
        <h1 className="md:text-xl lg:text-2xl text-dark dark:text-light max-sm:text-base text-center">
          Secretaria da Saúde - SESAPI
        </h1>
      </div>
      <img
        src={Logos}
        alt="Logo do GOV PI"
        className="max-sm:hidden object-contain dark:hidden"
        loading="lazy"
        width={350}
        height={180}
      />
      <img
        src={LogosDark}
        alt="Logo do GOV PI"
        className="hidden object-contain dark:block"
        loading="lazy"
        width={350}
        height={180}
      />
    </div>
  );
}
