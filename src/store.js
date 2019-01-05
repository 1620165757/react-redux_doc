import {createStore} from "redux";
import rootReducer from './reducers';
import {init} from "./actions/cart-actions";

let store = createStore(rootReducer);
export default store;