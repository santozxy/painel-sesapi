// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString()); // Convert darkMode to string
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-6 left-4 w-14 h-14 rounded-full flex items-center justify-center z-50 ${
        darkMode ? "bg-light" : "bg-dark"
      } transition-all duration-500 ease-in-out`}
    >
      {darkMode ? (
        <Moon size={24} className="text-dark" />
      ) : (
        <Sun size={24} className="text-light" />
      )}
    </button>
  );
}
