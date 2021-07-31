import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import TopSlider from '../UI/TopSlider';

const AppLayout = props => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <TopSlider />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;