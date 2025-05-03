import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./Pages/Home";
import { Tienda } from "./Pages/Tienda";
import { Contacto} from "./Pages/Contacto";
import { CartProvider } from "./CartContext";
import { Compra } from "./Pages/Compra"

export const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/tienda"} element={<Tienda />} />
          <Route path={"/contacto"} element={<Contacto />} />
          <Route path={"/compra"} element={<Compra />} />
        </Routes>
      </CartProvider>
    </>
  );
};
