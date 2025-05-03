import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

// Cargar carrito desde el local storage al iniciar
useEffect(() => {
  const storedCart = localStorage.getItem("cartItems");
  if(storedCart) {
    setCartItems(JSON.parse(storedCart));
  }
}, []);

// Guardar carrito en localStorage cada vez que cambia
useEffect(() =>{
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);


  // Función para agregar productos al carrito
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Función para obtener el total a pagar
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
