import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const productInCart = state.cart.find((item) => item.id === product.id);
      if (productInCart) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  fetchProduct: async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    set({ products: data });
  },
}));

export default useStore;
