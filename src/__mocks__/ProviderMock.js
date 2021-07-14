//* This is for create a provider and working with Redux
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

// We create the store
const store = createStore(reducer, initialState);
const history = createBrowserHistory();

// We create the fake provider for test
const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
