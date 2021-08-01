import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
// import MainNav from './MainNav';

const AppLayout = props => {
  return (
    <Fragment>
      <Header />
      {/* <MainNav /> */}
      <TopNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;