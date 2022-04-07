import { createContext, useContext, useReducer } from "react";
import { cartReducerFun } from "../reducers/cart-reducer.js";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartState, cartItemsDispatch] = useReducer(cartReducerFun, {
    cartCounter: 0,
    cartData:[]
  });
  return (
    <CartContext.Provider value={{ cartState, cartItemsDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartContextProvider, useCart };
