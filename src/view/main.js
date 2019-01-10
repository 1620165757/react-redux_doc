import GoodsList from "../component/GoodsList";
import React from "react";
import {Button, Input} from "antd";
import connect from "react-redux/es/connect/connect";
import {addGoods, inputOnChange} from "../actions/main-action";
import {Link} from "react-router-dom";

const Main = (data) => {
    // console.log(data);
    return (
        <div style={{padding: 15}}>
            <h1 style={{width: '100%', textAlign: 'center'}}>首页</h1>
            {/*<GoodsList/>*/}
            {/*<Input placeholder="请输入要添加的商品" defaultValue={main.inputText} onChange={(e) => data.inputOnChange(e.target.value)}/>*/}
            {/*<div className='btn-group'>*/}
            {/*<Button type="primary" onClick={data.addGoods}>添加</Button>*/}
            {/*<Button type="primary">*/}
            {/*<Link to={'/cart'}>购物车</Link>*/}
            {/*</Button>*/}
            {/*</div>*/}
        </div>
    )
};

export default connect(state => {
    console.log(state);
    return state
}, {addGoods, inputOnChange})(Main)