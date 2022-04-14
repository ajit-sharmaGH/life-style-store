const wishlistReducerFun = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {...state,
                wishlistCounter: state.wishlistCounter + 1,
                wishlistData: [...state.wishlistData, action.payload.value]
            };

        case "REMOVE_FROM_WISHLIST":
            return {...state,
                wishlistCounter: state.wishlistCounter - 1,
                wishlistData: state.wishlistData.filter(
                    (product) => product._id !== action.payload.value
                )
            }



        default:
            return state;
    }
}
export { wishlistReducerFun };