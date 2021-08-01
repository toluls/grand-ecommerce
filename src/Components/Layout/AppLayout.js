import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
// import classes from './AppLayout.module.scss';

const AppLayout = props => {
  return (
    <Fragment>
      <Header />
      <TopNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;