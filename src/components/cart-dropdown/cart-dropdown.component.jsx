import React from 'react'
import { connect } from 'react-redux';

import './cart-dropdown.style.scss';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-buttom.component'

const Cart = ({cartItems}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map( cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <CustomButton>Go To Check</CustomButton>
    </div>
);

const mapStateToProps= ({cart:{cartItems}}) =>({
    cartItems 
})

export default connect(mapStateToProps)(Cart);