import { shoppingCartItem } from "../classes/shoppingCartItem"

const initialState = {
    products: [],
    cart: [],
    orders: []
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':

            // Check that product exists from product store
            var productId = action.payload;
            /*
            var product = state.products.find(x => x.id === productId);
            if (product == undefined) {
                // Do nothing
                console.log("Invalid product id");
                return {...state}
            }
            */

            // Check if product exists in cart
            var productInCartIndex = state.cart.findIndex(x => x.productId === productId);            
            if (productInCartIndex == -1) {
                // Add first entry to cart                
                var item = new shoppingCartItem(productId, 1);
                return {
                    ...state,                    
                    cart: [
                        ...state.cart,
                        item
                    ]
                }
            }

            var qty = state.cart[productInCartIndex].quantity + 1;
            var cartArray = [...state.cart];
            cartArray.splice(productInCartIndex, 1);
            var item = new shoppingCartItem(productId, qty)
            return {
                ...state,
                cart: [
                    ...cartArray,
                    item
                ]
            }


        case 'INIT_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
        return state;
    }
}

export default shopReducer;