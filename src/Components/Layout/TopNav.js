import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './TopNav.module.scss';
import { MenuOpenIcon } from '../UI/Icons';

const NavBar = () => {
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    dispatch(uiActions.openNav(true));
  }

  return (
    <div className={classes.topnav}>
      <div className={classes.item} onClick={openMenuHandler}>
        <span className={classes.icon}><MenuOpenIcon /></span>
         MENU
      </div>
      <Link to="/products" className={classes.item}>Today's Deals</Link>
      <Link to="/customer-service" className={classes.item}>Customer Service</Link>
    </div>
  );
}

export default NavBar;