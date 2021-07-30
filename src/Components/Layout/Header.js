import React from 'react';
import classes from './Header.module.css';
import HeaderBrand from './HeaderBrand';
import HeaderSearch from './HeaderSearch';
import HeaderCart from './HeaderCart';

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderBrand />
      <HeaderSearch />
      <HeaderCart />
    </header>
  )
}

export default Header;