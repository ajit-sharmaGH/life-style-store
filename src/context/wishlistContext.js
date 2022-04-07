import { createContext, useContext, useReducer } from "react";
import { wishlistReducerFun } from "../reducers/wishlistReducer.js";
const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistItemsDispatch] = useReducer(
    wishlistReducerFun,
    {
      wishlistCounter: 0,
      wishlistData: [],
    }
  );
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistItemsDispatch }}>
      {" "}
      {children}{" "}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);
export { WishlistContextProvider, useWishlist };
