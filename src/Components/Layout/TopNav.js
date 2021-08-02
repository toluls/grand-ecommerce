import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import { cartActions } from '../../Store/cart-slice';
import classes from './TopNav.module.scss';
import { MenuOpenIcon } from '../UI/Icons';

const NavBar = () => {
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    dispatch(uiActions.openNav(true));
    dispatch(cartActions.addToCart());
  }

  return (
    <div className={classes.topnav}>
      <div className={classes.topnav__item} onClick={openMenuHandler}>
        <span className={classes.topnav__icon}><MenuOpenIcon /></span>
         MENU
      </div>
      <Link to="/products" className={classes.topnav__item}>Today's Deals</Link>
      <Link to="/wish-list" className={classes.topnav__item}>Wish List</Link>
      <Link to="/customer-service" className={classes.topnav__item}>Help</Link>
    </div>
  );
}

export default NavBar;