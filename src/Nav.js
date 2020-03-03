import React from 'react';
import './App.css';

import { Link}  from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <h3>logo</h3>
        <ul className="nav-links">
            <Link to='/purecomp'>
                <li>PureComp</li>
            </Link>
            <Link to='/funcomp'>
                <li>FunComp</li>
            </Link>
            <Link to='/lifecycle'>
                <li>LifeCycle</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/shop'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
