import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TopNav.module.scss';
import { MenuOpenIcon } from '../UI/Icons';

const NavBar = () => {
  return (
    <div className={classes.topnav}>
      <div className={classes.topnav__item}>
        <span className={classes.topnav__icon}><MenuOpenIcon /></span>
         All
      </div>
      <Link to="/products" className={classes.topnav__item}>Today's Deals</Link>
      <Link to="/wish-list" className={classes.topnav__item}>Wish List</Link>
      <Link to="/customer-service" className={classes.topnav__item}>Help</Link>
    </div>
  );
}

export default NavBar;