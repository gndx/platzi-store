import React from 'react';
import { AppContext } from '../context';
import HeaderComponent from '../components/Header';

const Header = () => <AppContext.Consumer>{context => <HeaderComponent {...context} />}</AppContext.Consumer>;

export default Header;
