import {combineReducers} from 'redux';
import mainReducer from "./main-reducer";


const allReducers = {
    main: mainReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;