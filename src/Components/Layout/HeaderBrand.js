import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HeaderBrand.module.scss';
import logo from '../../assets/img/grand-web.png';

const HeaderBrand = () => {
  return (
    <div className={classes.brand}>
      <Link to="/">
        <img src={logo} className={classes.brandImg} alt="Grand Fashion logo"/>
      </Link>
    </div>
  );
}

export default HeaderBrand;