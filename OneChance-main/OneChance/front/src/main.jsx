import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
