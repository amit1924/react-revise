/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // Import the CSS file

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading....</div>;
  }

  return (
    <div className="product-detail-container">
      <h2 className="product-detail-heading">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
      <p className="product-detail-description">{product.description}</p>
      <p className="product-detail-price">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
