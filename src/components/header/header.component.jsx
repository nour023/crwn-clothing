import React from 'react';

import { Link } from 'react-router-dom';
import './header.style.scss';
import { FaCrown } from "react-icons//fa";

import CardIcon from '../card-icon/card-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

import { connect } from 'react-redux';

const Header = ({hidden}) =>(
    <div className="header">
        <Link className="logo-container" to="/">
            {/* <img src="images/crown.png" className="logo" alt="" /> */}
            <FaCrown className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >Shop</Link>
            <Link className="option" to="/shop" >Contact</Link>
            <Link className="option" to="/signin" >Signin</Link>
            <CardIcon/>
        </div>
        {
            hidden ? null :
            <Cart/>
        }
        
    </div>
);
const mapStateToProps = state =>({
    hidden : state.cart.hidden
})
 export default connect(mapStateToProps)(Header);