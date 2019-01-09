import * as type from './action-type'

export const delFromCart = (goods) => (dispatch) => {

    dispatch({
        type: type.DEL_FROM_CART,
        data: goods
    })
};

export const addToCart = (goods) => (dispatch) => {
    dispatch({
        type: type.ADD_TO_CART,
        data: goods
    })
};