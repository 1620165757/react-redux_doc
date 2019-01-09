import React from 'react';
import {connect} from "react-redux";
import '../css/goodsListCss.css'
import {delGoods} from "../actions/main-action";
import {addToCart} from "../actions/cart-action";

const GoodsList = (data) => {
    let goodsList = data.main.goodsList;
    return (
        goodsList.length > 0 ? goodsList.map((item, idx) => (
            <div key={idx} className='goods-item'>
                <div className='goods-name'>{item}</div>
                <a className='add-to-cart-btn' href={null} onClick={() => data.addToCart(item)}>加入购物车</a>
                <a className='goods-btn' href={null} onClick={() => data.delGoods(item)}>删除</a>
            </div>
        )) : null
    )
};
export default connect(state => state, {delGoods,addToCart})(GoodsList)
