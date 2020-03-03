import React from 'react';
import './App.css';

import { Link}  from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <h3><img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7h00y79x_XnDIyLcYMF7LxjRkLU5h17rpZswi4wq7lTUUtjd3" /></h3>
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
