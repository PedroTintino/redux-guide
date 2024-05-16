import actionTypes from "./action-types";

const initialState = {
    currentUser: null,
};

const userReducer = (state= initialState, action) =>{
    switch(action.type){
        case actionTypes.LOGIN:
            return {...state, currentUser: action.payload}
        case actionTypes.LOGOUT:
            return {...state, currentUser: null}
        default:
            return state;
    }
    // if(action.type === actionTypes.LOGIN){
    //     return {...state, currentUser: action.payload};
    // }
    // if(action.type === actionTypes.LOGOUT){
    //     return {...state, currentUser: null};
    // }
    return state;
};
    
export default userReducer;