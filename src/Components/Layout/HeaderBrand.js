import React from 'react';
import classes from './HeaderBrand.module.scss';
import logo from '../../assets/img/grand-web.png';

const HeaderBrand = () => {
  return (
    <div className={classes.brand}>
      <img src={logo} className={classes.brandImg} alt="Grand Fashion logo"/>
    </div>
  );
}

export default HeaderBrand;