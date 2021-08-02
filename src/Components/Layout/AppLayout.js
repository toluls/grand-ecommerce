import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import MainNav from './MainNav';

const AppLayout = props => {
  const navOpen = useSelector(state => state.ui.navOpen);

  return (
    <Fragment>
      <Header />
      {navOpen && <MainNav />}
      <TopNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;