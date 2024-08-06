/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductSearch from "./components/ProductSearch";
import ProductSearchDetails from "./components/ProductSearchDetails";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/productsearch" element={<ProductSearch />} />
          <Route
            path="/productsearchdetails/:id"
            element={<ProductSearchDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
