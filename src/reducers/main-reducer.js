import {ADD_TO_CART, INPUT_ON_CHANGE} from "../actions/action-type";

const initState = {
    inputText: '咖啡',
    goodsList: ['牛奶', '面包']
};
export default function (state = initState, action) {
    switch (action.type) {
        case INPUT_ON_CHANGE: {
            return {
                ...state,
                inputText: action.data
            }
        }
        case ADD_TO_CART: {
            console.log('action', action);
            return {
                ...state,
                goodsList: [...state.goodsList, action.data]
            }
        }
        default:
            return state;
    }
};