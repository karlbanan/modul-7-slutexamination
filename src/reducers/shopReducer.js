const initialState = {
    cart: [],
    orders: []
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        cart: action.payload,
                        id: state.cart.length + 1
                    }
                ]
            }
        default:
            return state;
    }
}

export default shopReducer;