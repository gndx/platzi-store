import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import { AppContext, useAppState } from '../context';

const App = () => {
  const appState = useAppState();
  return (
    <AppContext.Provider value={appState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

<Route component={NotFound} />;
