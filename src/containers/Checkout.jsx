import React, { lazy, Suspense } from 'react';
import '../styles/components/Checkout.styl';

const Cart = lazy(() => import('../components/Cart'));

const Checkout = () => (
  <Suspense fallback={<h1>Cargando...</h1>}>
    <Cart />
  </Suspense>
);

export default Checkout;
