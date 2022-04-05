import { createContext, useContext, useReducer } from "react";

import {
  filterReducer,
  initialState,
} from "../reducers/productsFilterReducer.js";

const ProductsFilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <ProductsFilterContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}{" "}
    </ProductsFilterContext.Provider>
  );
};

const useProductsFilter = () => useContext(ProductsFilterContext);
export { FilterContextProvider, useProductsFilter };
