import {applyMiddleware, createStore} from "redux";
import {rootReducer} from './reducers/index-reducer';
import thunk from "redux-thunk";

const middleware = [thunk];
let store = createStore(
    rootReducer,
    applyMiddleware(...middleware));
export default store;