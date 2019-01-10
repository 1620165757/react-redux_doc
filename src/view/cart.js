import {connect} from "react-redux";
import React from "react";
import {delFromCart} from "../actions/cart-action";

const Cart = ({main}) => {
    let cartList = main.cartList;
    return (
        <div style={{padding: 15}}>
            <h1 style={{width: '100%', textAlign: 'center'}}>购物车</h1>
            {cartList.length > 0 ? cartList.map((item, idx) => (
                <div key={idx} className='goods-item'>
                    <div className='goods-name'>{item}</div>
                    {/*<a className='goods-btn' href={null} onClick={() => data.delGoods(item)}>删除</a>*/}
                </div>
            )) : null}
        </div>
    )
};
export default connect(state => state, {delFromCart})(Cart);
