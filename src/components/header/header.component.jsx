import React from 'react';

import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <img src="images/crown.png" className="logo" alt="" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >Shop</Link>
            <Link className="option" to="/shop" >Contact</Link>
        </div>
    </div>
);
 export default Header;