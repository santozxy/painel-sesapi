import LogoSei from "@assets/logo-sei.webp";
import Logos from "@assets/logos.png";
import LogosDark from "@assets/logos-dark.png";
import { DropdownMenuInfo } from "./dropdown-menu-info";
import { ThemeSwitcher } from "./switcher-theme";

export default function Header() {
  return (
    <div className="fixed border-b z-50 mb-10 top-0 right-0 w-full h-24 max-md:h-32 bg-white dark:bg-dark  items-center flex  shadow-md dark:shadow-xl dark:border-gray-500 flex-wrap max-sm:flex-col max-sm:gap-0 px-3">
      <div className="flex gap-5 w-full h-full justify-between items-center">
        <img
          src={LogoSei}
          className="object-contain"
          alt="Logo do SEI"
          width={80}
          height={80}
        />
        <div className="flex items-center gap-3 z-[9999999] h-full">
          <img
            src={Logos}
            alt="Logo do GOV PI"
            className="object-contain dark:hidden"
            loading="lazy"
            width={270}
            height={100}
          />
          <img
            src={LogosDark}
            alt="Logo do GOV PI"
            className="hidden object-contain dark:block"
            loading="lazy"
            width={270}
            height={100}
          />
          <div className="flex max-sm:absolute bottom-1 right-5 gap-5">
            <ThemeSwitcher />
            <DropdownMenuInfo />
          </div>
        </div>
      </div>
      <div className="absolute left-3 right-0 w-full max-sm:bottom-0">
        <h1 className="md:text-xl lg:text-2xl text-dark dark:text-light max-sm:text-base font-semibold sm:text-center">
          Painel SESAPI
        </h1>
      </div>
    </div>
  );
}
