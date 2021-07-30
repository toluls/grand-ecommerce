import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = props => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;