import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

const AppLayout = props => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;