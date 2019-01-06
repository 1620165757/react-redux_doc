import React from "react";
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router,} from 'react-router-dom';
import {App} from "./App";
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router>
        <Route path='/' component={App}/>
    </Router>,
    document.getElementById('root')
);