const wishlistReducerFun = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {...state, wishlistCounter: state.wishlistCounter + 1 };
        default:
            return state;
    }
}
export { wishlistReducerFun };