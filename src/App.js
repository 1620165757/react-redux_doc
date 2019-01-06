import React from 'react';
import Main from "./view/main";
import store from "./store";
import Provider from "react-redux/es/components/Provider";

export const App = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
);