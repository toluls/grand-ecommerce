import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopNav from './TopNav';
import TopSlider from '../UI/TopSlider';
import MainNav from './MainNav';
// import classes from './AppLayout.module.scss';

const AppLayout = props => {
  return (
    <Fragment>
      <Header />
      <TopNav />
      <MainNav />
      <TopSlider />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;