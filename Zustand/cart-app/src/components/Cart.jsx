import React from "react";
import useStore from "../zustand/store";

const Cart = () => {
  const { cart, removeFromCart } = useStore();
  console.log(`cart: ${cart}`);

  return (
    <div className="container mx-auto px-4 mt-6">
      <h2 className="text-2xl font-bold my-4">Cart</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((product) => (
          <li className="bg-white shadow-md rounded-lg p-4" key={product.id}>
            {console.log(product)}
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p className="mb-2">Quantity: {product.quantity}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
