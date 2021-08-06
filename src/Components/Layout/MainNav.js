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
      <div className={classes.backdrop} onClick={closeMenuHandler}></div>
      <div className={classes.content}>
        <div className={classes.header}>
        <div className={classes.logo}>
          <img src={brandLogo} className={classes.img} alt="Grand Fashion logo" />
        </div>
        <div className={classes.button} onClick={closeMenuHandler}>
          <MenuCloseIcon />
        </div>
        </div>
        <NavContent />
      </div>
    </div>
  );
}

export default MainNav;