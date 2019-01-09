import React from 'react';
import store from "./store";
import Provider from "react-redux/es/components/Provider";
import {AppRouter} from "./appRouter";

export const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);