export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_CART = 'ADD_CART' ;
export const DELETE_ITEM = 'DELETE_ITEM';

export const addCart = (item) => {
    return {
        type: ADD_CART,
        payload : {
            item            
        }
    }
}

export const deleteCart = (item) => {
    return{
        type: DELETE_ITEM,
        payload: {
            item            
        }
    }
}

export const increaseQuantity = (item) => {
    return{
        type: INCREASE_QUANTITY,
        payload: item
    }
}
export const DecreaseQuantity = (item) => {
    return{
        type: DECREASE_QUANTITY,
        payload: item
    }
}

export const getNumberCart = () => {
    return{
        type: GET_NUMBER_CART
    }
}

export const getProducts = (payload) => {
    return {
        type: GET_PRODUCTS,
        payload
    }
}