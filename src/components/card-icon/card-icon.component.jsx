import React from 'react'
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import './card-icon.style.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


const CardIcon = ({toggleCartHidden , itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" >{itemCount}</span>
    </div>
);

const mapStateToProps = ({cart: { cartItems }}) =>({
    itemCount: cartItems.reduce(( accumalatedQauntity , cartItem ) => accumalatedQauntity + cartItem.quantity ,0)
})

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps ,mapDispatchToProps)(CardIcon);