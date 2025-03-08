import React, { createContext, useState } from "react";

// Crear el contexto del carrito
export const CartContext = createContext();

// Proveedor del carrito para envolver la aplicación
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (item) => {
    if (!item) {
      console.error("Error: No se proporcionó un producto.");
      return;
    }
    console.log("Producto recibido:", item); // imprime el producto
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Calcular el monto total del carrito
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotalAmount, clearCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
