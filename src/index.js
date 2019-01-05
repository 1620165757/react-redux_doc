import store from './store.js';
import {addToCart, init} from './actions/cart-actions';
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from "./App";


const _App_ = <App/>;
ReactDOM.render(
    <Provider store={store}>
        {_App_}
    </Provider>,
    document.getElementById('root')
);
store.dispatch(init('Coffee'));
// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));