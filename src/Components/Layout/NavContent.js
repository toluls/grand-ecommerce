import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './NavContent.module.scss';
import { SpaIcon, HeartIcon, FashionIcon, TvIcon, ComputingIcon, HelpIcon, ProductIcon, PhoneIcon, HomeIcon } from '../UI/Icons';

const NavContent = () => {
  const dispatch = useDispatch();
  const closeMenuHandler = () => {
    dispatch(uiActions.openNav(false));
  }

  return (
    <div className={classes.nav}>
      <Link to="/" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><HomeIcon /></span>          
          Home
        </Link>

        <Link to="/products" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><ProductIcon /></span>          
          All Products
        </Link>

        <Link to="/products/electronics" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><TvIcon /></span>          
          Electronics
        </Link>

        <Link to="/products/fashion" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><FashionIcon /></span>          
          Fashion
        </Link>

        <Link to="/products/beauty" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><SpaIcon /></span>          
          Beauty
        </Link>

        <Link to="/products/computing" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><ComputingIcon /></span>          
          Computing
        </Link>

        <Link to="/products/phones" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><PhoneIcon /></span>          
          Phones
        </Link>

        <Link to="/wish-list" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><HeartIcon /></span>          
          Wish List
        </Link>

        <Link to="/customer-service" className={classes.nav__item}
        onClick={closeMenuHandler}>
          <span className={classes.nav__icon}><HelpIcon /></span>          
          Customer Service
        </Link>
    </div>
  );
}

export default NavContent;