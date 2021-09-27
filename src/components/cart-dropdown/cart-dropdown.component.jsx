import React from 'react'

import './cart-dropdown.style.scss'

import CustomButton from '../custom-button/custom-buttom.component'

const Cart = () =>(
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>Go To Check</CustomButton>
    </div>
);

export default Cart;