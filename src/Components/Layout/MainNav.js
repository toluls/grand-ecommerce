import React from 'react';
import classes from './MainNav.module.scss';
import NavContent from './NavContent';
import brandLogo from '../../assets/img/grand-web.png';
import { MenuCloseIcon } from '../UI/Icons';

const MainNav = props => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__backdrop}></div>
      <div className={classes.nav__content}>
        <div className={classes.nav__header}>
        <div className={classes.nav__logo}>
          <img src={brandLogo} className={classes.nav__img} alt="Grand Fashion logo" />
        </div>
        <div className={classes.nav__button}>
          <MenuCloseIcon />
        </div>
        </div>
        <NavContent />
      </div>
    </div>
  );
}

export default MainNav;