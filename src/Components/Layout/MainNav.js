import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNav.module.scss';
import { HomeIcon, CartIcon } from '../UI/Icons';

const MainNav = () => {
  return (
    <div className={classes.nav}>
        <Link to="/" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Home
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          All Products
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Fashion
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Books
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Electronics
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Computing
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Phones
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Today's Deals
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><CartIcon /></span>          
          Cart
        </Link>

        <Link to="/wish-list" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Wish List
        </Link>

        <Link to="/customer-service" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Customer Service
        </Link>
    </div>
  );
}

export default MainNav;