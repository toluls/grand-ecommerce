import React from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './MainNav.module.scss';
import NavContent from './NavContent';
import brandLogo from '../../assets/img/grand-web.png';
import { MenuCloseIcon } from '../UI/Icons';

const MainNav = () => {
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(uiActions.openNav(false));
  }

  return (
    <div className={classes.nav}>
      <div className={classes.nav__backdrop} onClick={closeMenuHandler}></div>
      <div className={classes.nav__content}>
        <div className={classes.nav__header}>
        <div className={classes.nav__logo}>
          <img src={brandLogo} className={classes.nav__img} alt="Grand Fashion logo" />
        </div>
        <div className={classes.nav__button} onClick={closeMenuHandler}>
          <MenuCloseIcon />
        </div>
        </div>
        <NavContent />
      </div>
    </div>
  );
}

export default MainNav;