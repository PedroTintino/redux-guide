
import actionTypes from "./action-types";

export const loginUser = (payload) =>({
    type: actionTypes.LOGIN,
    payload
})

export const logoutUser = () => ({
    type: actionTypes.LOGOUT
})
