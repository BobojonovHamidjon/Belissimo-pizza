import { createContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    if (
      product.size !== "small" ||
      product.thinknes !== "thin" ||
      product.bort !== "default" ||
      product.ingredients.length >= 1
    ) {
      setCart([...cart, { cart_id: Date.now(), ...product }]);
    } else {
      let isContain = cart.find((item) => item.id === product.id);
      setCart(
        isContain
          ? cart.map((item) =>
              item.id === product.id &&
              product.size === "small" &&
              product.thinknes === "thin" &&
              product.bort === "default" &&
              product.ingredients.length === 0
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...cart, { cart_id: Date.now(), ...product }]
      );
    }
  }

  function incrementItem(id) {
    setCart(
      cart.map((item) =>
        item.cart_id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function deleteItem(id) {
    setCart((prev) => prev.filter((item) => item.cart_id !== id));
  }

  function decrementItem(id) {
    setCart(
      cart.map((item) =>
        item.cart_id === id ? { ...item, qty: item.qty - 1 } : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementItem, decrementItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
