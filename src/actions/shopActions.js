export const initProducts = (products) => {
    return {
        type: 'INIT_PRODUCTS',
        payload: products
    }
}

export const addToCart = (productId) => {
    return {
        type: 'ADD_TO_CART',
        payload: productId
    }
}

export const subFromCart = (productId) => {
    return {
        type: 'SUB_FROM_CART',
        payload: productId
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
        payload: {}
    }
}
