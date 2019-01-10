import {combineReducers} from 'redux';
import mainReducer from "./main-reducer";
import cartReducer from "./cart-reducer";
import globalReducer from './global-reducer'


const allReducers = combineReducers({
    main: mainReducer,
    cart: cartReducer
});

const appReducers = {
    allReducers: allReducers,
    globalReducer: globalReducer
};

export const rootReducer = combineReducers(appReducers);
