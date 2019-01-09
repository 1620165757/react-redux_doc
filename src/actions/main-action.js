import * as type from "./action-type";
import {message} from 'antd'

export const addGoods = () => (dispatch, getState) => {
    let mainState = getState().main;
    if (mainState.goodsList.includes(mainState.inputText)) {
        message.error('不能重复添加!!', 1);
        return
    }
    dispatch({
        type: type.ADD_GOODS,
        data: getState().main.inputText
    })
};
export const inputOnChange = (text) => (dispatch) => {
    dispatch({
        type: type.INPUT_ON_CHANGE,
        data: text
    })
};

export const delGoods = (goods) => (dispatch, getState) => {
    let mainState = getState().main;
    if (!mainState.goodsList.includes(goods)) {
        message.error('要删除的商品不存在!!', 1);
        return
    }
    dispatch({
        type: type.DEL_GOODS,
        data: goods
    })
};