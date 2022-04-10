const cartReducerFun = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cartCounter: state.cartCounter + 1, }

        default:
            return state;
    }
}
export { cartReducerFun };