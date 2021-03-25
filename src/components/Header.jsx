import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';
import logo from '@assets/logo-gndx.png';
import Logo from '@components/Logo';

const Header = props => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/">
        <img src={logo} alt="logo" width="32" />
        <Logo />
      </Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
      {props.cart.length > 0 &&
        <div className="Header-alert">{props.cart.length}</div>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
