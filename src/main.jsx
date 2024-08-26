import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "swiper/css";
import "swiper/css/pagination";
import "./assets/scss/main.scss";

import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.querySelector(".wrapper")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
