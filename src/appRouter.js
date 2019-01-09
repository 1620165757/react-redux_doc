import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./view/main";
import Cart from "./view/cart";
import React from "react";

export const AppRouter = () => (
    <Router>
        <div>
            <Route path='/main' component={Main}/>
            <Route path='/cart' component={Cart}/>
        </div>
    </Router>
);