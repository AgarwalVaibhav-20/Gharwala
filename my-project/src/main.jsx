import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  </StrictMode>
);

