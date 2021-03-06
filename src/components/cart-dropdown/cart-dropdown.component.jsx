import React from 'react'
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import './cart-dropdown.style.scss';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-buttom.component';

import { toggleCartHidden } from '../../redux/cart/cart.action';

const Cart = ({cartItems , history , dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
               ( cartItems.map( cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )) :
                (<span className="empty-message" > Your cart is empty </span>)
            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout') ;
            dispatch(toggleCartHidden())
        }} >Go To Check</CustomButton>
    </div>
);

const mapStateToProps= state =>({
    cartItems :selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(Cart));