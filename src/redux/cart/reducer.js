import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
            // Verificar se já está no carrinho
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
        default: 
            return state;
    }

}

export default cartReducer;