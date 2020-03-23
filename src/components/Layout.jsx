import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.styl';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
