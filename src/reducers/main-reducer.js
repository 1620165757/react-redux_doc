import {ADD_GOODS, ADD_TO_CART, DEL_GOODS, INPUT_ON_CHANGE} from "../actions/action-type";

const initState = {
    inputText: '',
    goodsList: ['牛奶', '面包'],
    cartList: []
};
export default function (state = initState, action) {
    switch (action.type) {
        case INPUT_ON_CHANGE: {
            return {
                ...state,
                inputText: action.data
            }
        }
        case ADD_GOODS: {
            return {
                ...state,
                goodsList: [...state.goodsList, action.data]
            }
        }
        case DEL_GOODS: {
            return {
                ...state,
                goodsList: state.goodsList.filter((i) => i !== action.data)
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                cartList: [...state.cartList, action.data]
            }
        }
        default:
            return state;
    }
};