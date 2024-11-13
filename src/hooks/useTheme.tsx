import { useContext } from "react";

import { ThemeContext, ThemeType } from "../context/theme";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    const newTheme: ThemeType = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return { theme, isDarkMode, toggleTheme };
};
