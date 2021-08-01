import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuOpenIcon } from './Icons';
import classes from './MobileMenuOpen.module.scss';

const MobileMenuOpen = () => {
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    dispatch({ type: 'NAV', value: true });
  }

  return (
    <div className={classes.menu} onClick={openMenuHandler}>
      <MenuOpenIcon />
    </div>
  )
}

export default MobileMenuOpen;