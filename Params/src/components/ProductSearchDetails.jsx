/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductSearchDetails.css";

const ProductSearchDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const data = await res.json();
    setProduct(data.product);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading....</div>;
  }

  return (
    <div className="detailContainer">
      <h2 className="detailHeading">{product.title}</h2>
      <img src={product.image} alt={product.title} className="detailImage" />
      <p className="detailDescription">{product.description}</p>
      <p className="detailPrice">${product.price}</p>
    </div>
  );
};

export default ProductSearchDetails;
