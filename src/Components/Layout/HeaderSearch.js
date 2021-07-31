import React from 'react';
import classes from './HeaderSearch.module.scss';
import { SearchIcon } from '../UI/Icons';

const HeaderSearch = props => {
  return (
    <div className={classes.search}>
      <input type="search" onBlur={props.onSearchBlur} className={classes.input} placeholder="Search products and categories" />
      <button onClick={props.onSearchClick} className={classes.action}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default HeaderSearch;