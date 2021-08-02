import React from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import { MenuOpenIcon } from './Icons';
import classes from './MobileMenuOpen.module.scss';

const MobileMenuOpen = () => {
  const dispatch = useDispatch();

  const openMenuHandler = () => {
    dispatch(uiActions.openNav(true));
  }

  return (
    <div className={classes.menu} onClick={openMenuHandler}>
      <MenuOpenIcon />
    </div>
  )
}

export default MobileMenuOpen;