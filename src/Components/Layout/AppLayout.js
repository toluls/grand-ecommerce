import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import MainNav from './MainNav';
import classes from './AppLayout.module.scss';

const AppLayout = props => {
  const navOpen = useSelector(state => state.ui.navOpen);

  return (
    <div className={classes.container}>
      <Header />
      {navOpen && <MainNav />}
      <TopNav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;