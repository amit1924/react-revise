import React, { useEffect } from "react";
import useStore from "../zustand/store";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, fetchProduct, addToCart, cart } = useStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="container mx-auto px-4 relative">
      <div className="absolute top-0 right-0 border rounded-lg flex justify-center">
        <Link to="/cart" className="text-blue-500 p-2  mb-4 text-center">
          🛒{cart.length}
        </Link>
      </div>
      <h2 className="text-2xl font-bold my-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li className="bg-white shadow-md rounded-lg p-4" key={product.id}>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2"
            />
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
