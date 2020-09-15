import React from 'react';
import '../styles/components/Checkout.styl';
import CheckoutComponent from '../components/Checkout';
import { AppContext } from '../context';

const Checkout = (props) => {
  return <AppContext.Consumer>{context => <CheckoutComponent {...context} />}</AppContext.Consumer>;
};

export default Checkout;
