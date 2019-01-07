import GoodsList from "../GoodsList";
import React from "react";
import {Button, Input} from "antd";
import connect from "react-redux/es/connect/connect";
import {addGoods, inputOnChange} from "../actions/main-action";

const Main = ({main, ...data},) => {
    return (
        <div style={{padding: 15}}>
            <h1 style={{width: '100%', textAlign: 'center'}}>首页</h1>
            <GoodsList/>
            <Input placeholder="default size" defaultValue={main.inputText} onChange={(e) => data.inputOnChange(e.target.value)}/>
            <Button type="primary" onClick={data.addGoods}>添加</Button>
        </div>
    )
};

export default connect(state => state, {addGoods, inputOnChange})(Main)