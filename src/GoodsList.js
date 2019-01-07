import React from 'react';
import {connect} from "react-redux";

const GoodsList = (data) => {
    console.log('GoodsList', data);
    let goodsList = data.main.goodsList;
    return (
        goodsList.length > 0 ? goodsList.map((item, idx) => (
            <li key={idx}>{item}</li>
        )) : <div>111</div>
    )
};
export default connect(state => state)(GoodsList)
