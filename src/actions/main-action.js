import * as type from "./action-type";

export const addGoods = () => (dispatch, getState) => {
    dispatch({
        type: type.ADD_TO_CART,
        data: getState().main.inputText
    })
};
export const inputOnChange = (text) => (dispatch) => {
    dispatch({
        type: type.INPUT_ON_CHANGE,
        data: text
    })
};