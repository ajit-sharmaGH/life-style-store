const cartReducerFun = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload.value],
                cartCounter: state.cartCounter + 1,
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData: state.cartData.filter(
                    (data) => data._id !== action.payload.value
                ),
                cartCounter: state.cartCounter - 1,
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartData: state.cartData.map((data) =>
                    data._id === action.payload.value ?
                    {
                        ...data,
                        quantity: data.quantity - 1,
                        totalPrice: (data.quantity - 1) * data.originalPrice,
                    } :
                    data
                ),
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartData: state.cartData.map((data) =>
                    data._id === action.payload.value ?
                    {
                        ...data,
                        quantity: data.quantity + 1,
                        totalPrice: (data.quantity + 1) * data.originalPrice,
                    } :
                    data
                ),
            };

        default:
            return state;
    }
};
export { cartReducerFun };