/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "light" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button className="text-2xl border rounded-lg" onClick={toggleTheme}>
        {theme === "light" ? "🔳" : "🔲"}
      </button>
    </div>
  );
};

export default DarkTheme;
