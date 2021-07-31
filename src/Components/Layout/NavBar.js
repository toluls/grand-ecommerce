import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={classes.navBar}>
      <Link to="/products" className={classes.navBarItem}>Today's Deals</Link>
      <Link to="/wish-list" className={classes.navBarItem}>Wish List</Link>
      <Link to="/customer-service" className={classes.navBarItem}>Help</Link>
    </div>
  );
}

export default NavBar;