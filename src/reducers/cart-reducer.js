import {ADD_TO_CART, DEL_FROM_CART} from "../actions/action-type";

export default function (state, action) {
    switch (action.type) {
        case DEL_FROM_CART: {
            return {
                ...state,
                cartList: state.cartList.filter(i => i !== action.data)
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}