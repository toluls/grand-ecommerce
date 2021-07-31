import React from 'react';
import classes from './HeaderSearch.module.css';
import { SearchIcon } from '../UI/Icons';

const HeaderSearch = props => {
  return (
    <div className={classes.search}>
      <input type="search" onBlur={props.onSearchBlur} className={classes.input} placeholder="Search Grand Fashion" />
      <button onClick={props.onSearchClick} className={classes.action}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default HeaderSearch;