import GoodsList from "../GoodsList";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {Button} from "antd";

const Main = () => {
    return (
        <div style={{padding:15}}>
            <h1 style={{width: '100%', textAlign: 'center'}}>首页</h1>
            <GoodsList/>
            <Button type="primary" onClick={null}>添加11</Button>
        </div>
    )
};

export default connect(state => state)(Main)