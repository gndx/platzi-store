import React, { Suspense, lazy } from 'react';

const Found = lazy(() => import('../components/Found'));

const NotFound = () => (
  <Suspense fallback={<h1>Cargando...</h1>}>
    <Found />
  </Suspense>
);

export default NotFound;
