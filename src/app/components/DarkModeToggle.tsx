import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full transition duration-300 ease-in-out bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <Sun className="text-white" />
      ) : (
        <Moon className="text-black" />
      )}
    </button>
  );
};

export default DarkModeToggle;
