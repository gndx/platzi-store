import React, { lazy, Suspense } from 'react';

const Products = lazy(() => import('../components/Products'));

const Home = () => (
  <Suspense fallback={<h1>Cargando...</h1>}>
    <Products />
  </Suspense>
);

export default Home;
