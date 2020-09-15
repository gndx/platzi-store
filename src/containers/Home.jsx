import React from 'react';
import { AppContext } from '../context';
import Products from '../components/Products';

const Home = () => <AppContext.Consumer>{context => <Products {...context} />}</AppContext.Consumer>;

export default Home;
