import React from "react";
import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export function ThemeSwitcher() {
  const { colorTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 left-4 w-14 h-14 rounded-full flex items-center justify-center z-50 ${
        colorTheme === "dark" ? "bg-light" : "bg-dark"
      } transition-all duration-500 ease-in-out`}
    >
      {colorTheme === "dark" ? (
        <Moon size={24} className="text-dark" />
      ) : (
        <Sun size={24} className="text-light" />
      )}
    </button>
  );
}
