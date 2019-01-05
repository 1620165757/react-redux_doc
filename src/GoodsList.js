import React from 'react';
import {connect} from "react-redux";

const GoodsList = ({products, addToCart}) => {
    console.log(products.products);
    return (
        products.products.length > 0 ? products.products.map((item, idx) => (
            <li key={idx}>{item}</li>
        )) : <div>111</div>
    )
};
export default connect(state => state)(GoodsList)
