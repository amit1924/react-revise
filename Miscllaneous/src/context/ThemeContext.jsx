/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //   if (theme === "light") {
  //     document.body.style.backgroundColor = "#FFFFFF";
  //     document.body.style.color = "black";
  //   } else if (theme === "dark") {
  //     document.body.style.backgroundColor = "black";
  //     document.body.style.color = "#FFFFFF";
  //   }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
