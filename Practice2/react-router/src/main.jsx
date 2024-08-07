import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

// import ContextProvider from "./ContextProvider";
// import ConsumeContext from "./ConsumeContext";
// import ConsumeContextPage from "./page/ConsumeContextPage";
import ProtectedRoute from "./ProtectedRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <ProtectedRoute />

    {/* Context Provider */}

    {/* <ContextProvider>
      <ConsumeContext />
      <ConsumeContextPage />
    </ContextProvider> */}
  </React.StrictMode>
);
