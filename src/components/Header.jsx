import React from 'react';

import { Link } from 'react-router-dom';

import * as initialState from '../initialState';

import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>

        {initialState.initialState.cart.length > 0 && (
          <div className="Header-alert">
            {initialState.initialState.cart.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
