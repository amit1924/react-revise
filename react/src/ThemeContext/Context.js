import React,{useState,createContext,useContext} from 'react'

//Create context
export const ThemeContext = createContext();
const Context = ({children}) => {
    //Use Context
    const [theme, setTheme]=useState("light")
 
        const toggleTheme = () => {
            if (theme === "light") {
                document.body.style.backgroundColor ="black"
                document.body.style.color ="white"
                
              setTheme("dark");

            } else {
                document.body.style.backgroundColor ="white"
                document.body.style.color ="black"
              setTheme("light");
            }
        }
          
  return (
   <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default Context
