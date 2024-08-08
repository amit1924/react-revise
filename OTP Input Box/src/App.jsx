import React from "react";
import OTPInput from "./components/OTPInput";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <OTPInput length={4} />
    </div>
  );
};

export default App;
