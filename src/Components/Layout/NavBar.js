import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <Link to="/products" className={classes.navbar__item}>Today's Deals</Link>
      <Link to="/wish-list" className={classes.navbar__item}>Wish List</Link>
      <Link to="/customer-service" className={classes.navbar__item}>Help</Link>
    </div>
  );
}

export default NavBar;