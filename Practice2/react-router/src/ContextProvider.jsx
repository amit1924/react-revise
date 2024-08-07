import { useState } from "react";
import { MyContext } from "./MyContext";

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [text, setText] = useState("hello");
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default ContextProvider;
