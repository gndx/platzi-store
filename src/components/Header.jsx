import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.styl';

const HeaderComponent = (props) => {
  const { cart } = props.state;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default HeaderComponent;
