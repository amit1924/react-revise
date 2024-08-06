/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Product App</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/products">Home Product</Link>
          </li>
          <li>
            <Link to="/productsearch">Product Search By Query</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
