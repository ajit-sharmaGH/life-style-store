import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {CartContextProvider} from './context/cart-context.js'
import {WishlistContextProvider} from './context/wishlistContext.js'
// import {BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { FilterContextProvider } from "./context/filter-context.js";
// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
   <CartContextProvider>
     <WishlistContextProvider>
      <App />
      </WishlistContextProvider>
      </CartContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
