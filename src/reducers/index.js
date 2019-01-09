import {combineReducers} from 'redux';
import mainReducer from "./main-reducer";
import cartReducer from "./cart-reducer";


const allReducers = {
    main: mainReducer,
    cart:cartReducer
};

export const rootReducer = combineReducers(allReducers);
