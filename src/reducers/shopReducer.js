import { shoppingCartItem } from "../classes/shoppingCartItem"

const initialState = {
    products: [],
    cart: [],
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':

            var productId = action.payload;

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


            case 'SUB_FROM_CART':

                var productId = action.payload;
    
                var productInCartIndex = state.cart.findIndex(x => x.productId === productId);            
                if (productInCartIndex >= 0) {    
                    var qty = state.cart[productInCartIndex].quantity - 1;                    
                    var cartArray = [...state.cart];
                    cartArray.splice(productInCartIndex, 1);
                    var item = new shoppingCartItem(productId, qty)

                    if (qty > 0) {
                        return {
                            ...state,
                            cart: [
                                ...cartArray,
                                item
                            ]
                        }
                    }
                    else {
                        return {
                            ...state,
                            cart: [...cartArray]
                        }
                    }
                }
                else {
                    return state;
                }
    

        case 'INIT_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }            

        default:
            return state;
    }
}

export default shopReducer;