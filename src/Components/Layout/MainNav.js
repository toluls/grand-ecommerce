import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNav.module.scss';
import { HomeIcon, CartIcon, HeartIcon, FashionIcon, TvIcon, ComputingIcon, HelpIcon, ProductIcon, PhoneIcon } from '../UI/Icons';

const MainNav = () => {
  return (
    <div className={classes.nav}>
        <Link to="/" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Home
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><ProductIcon /></span>          
          All Products
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><TvIcon /></span>          
          Electronics
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><FashionIcon /></span>          
          Fashion
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Beauty
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><ComputingIcon /></span>          
          Computing
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><PhoneIcon /></span>          
          Phones
        </Link>

        <Link to="/products" className={classes.nav__item}>
          <span className={classes.nav__icon}><CartIcon /></span>          
          Cart
        </Link>

        <Link to="/wish-list" className={classes.nav__item}>
          <span className={classes.nav__icon}><HeartIcon /></span>          
          Wish List
        </Link>

        <Link to="/customer-service" className={classes.nav__item}>
          <span className={classes.nav__icon}><HelpIcon /></span>          
          Customer Service
        </Link>
    </div>
  );
}

export default MainNav;