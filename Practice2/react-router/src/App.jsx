import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Products from "./page/Products";
import Navigate from "./components/Navigate";

const App = () => {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:category" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
