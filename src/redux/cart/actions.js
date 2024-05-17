import CartActionTypes from "./action-types";

export const addProductToCart = (payload) =>({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const addProductQuantity = (payload) => ({
    type: CartActionTypes.ADD_QUANTITY,
    payload
})

export const decrementQuantity = (payload) => ({
    type: CartActionTypes.DECREMENT_QUANTITY,
    payload
})