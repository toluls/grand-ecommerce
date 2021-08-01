import React from 'react';
import { MenuOpenIcon } from './Icons';
import classes from './MobileMenuOpen.module.scss';

const MobileMenuOpen = props => {
  return (
    <div className={classes.menu}>
      <MenuOpenIcon />
    </div>
  )
}

export default MobileMenuOpen;