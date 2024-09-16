import { Moon, Sun } from "lucide-react";
import { useTheme } from "@hooks";

export function ThemeSwitcher() {
  const { colorTheme, toggleTheme } = useTheme();

  return (
    <button
      role="button"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`max-sm:fixed max-sm:w-14 max-sm:h-14 max-sm:border-2 max-sm:rounded-full flex items-center justify-center z-[99] max-sm:shadow-md 
        sm:left-4 max-sm:bottom-28 max-sm:right-4 
         ${colorTheme === "dark" ? "max:smbg-dark" : "max-sm:bg-light"} max-sm:transition-all max-sm:duration-500 max-sm:ease-in-out`}
    >
      {colorTheme === "dark" ? (
        <Sun className="text-light w-7 h-7" />
      ) : (
        <Moon className="text-dark w-7 h-7" />
      )}
    </button>
  );
}
