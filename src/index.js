import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {FilterContextProvider} from './context/filter-context.js'
// Call make Server

makeServer();
ReactDOM.render(
  <React.StrictMode>
   <FilterContextProvider>

  
      <App />
     
      </FilterContextProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
