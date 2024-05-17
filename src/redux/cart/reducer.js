import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
            // Verificar se já está presente
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );
            // caso esteja, incrementar a quantidade ++
            if(productIsAlreadyInCart){
                return {...state, products: state.products.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1}
            : product
        ),
    };
            }
            // caso não, adicionar o primeiro exemplar
            return {...state, products: [...state.products, {...action.payload, quantity: 1}]} 
        
        case CartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        
        case CartActionTypes.ADD_QUANTITY:
            return{
                ...state,
                products: state.products.map((product) => product.id === action.payload ? {...product, quantity: product.quantity + 1} : product)
            }
        
        case CartActionTypes.DECREMENT_QUANTITY:
            return{
                ...state,
                products: state.products.map((product) => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product)
            }
        
        default: 
            return state;
    }

}

export default cartReducer;