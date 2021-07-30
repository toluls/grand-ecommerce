import React from 'react';
import classes from './HeaderBrand.module.css';
import logo from '../../assets/img/grand-web-logo.png';

const HeaderBrand = () => {
  return (
    <div className={classes.brand}>
      <img src={logo} className={classes.brandImg} alt="Grand Fashion logo"/>
    </div>
  );
}

export default HeaderBrand;