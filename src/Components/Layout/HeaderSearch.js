import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import SearchedProducts from '../Products/SearchedProducts';
import { SearchIcon } from "../UI/Icons";
import classes from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef();
  const dispatch = useDispatch();

  const searchStarted = searchTerm.trim().length > 1;

  const clearSearchHandler = () => {
    setSearchTerm('');
  }

  const searchChangeHander = event => {
    setSearchTerm(event.target.value);
  }

  const searchClickHandler = () => {
    dispatch(uiActions.postNotification({
      title: 'Action Required',
      message: 'Kindly enter a search term and select from the options in the dropdown.',
      time: 6
    }));
  }

  useEffect(() => {
    const checkOutsideClick = event => {
      if (searchStarted && searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm('');
      }
    }
    document.addEventListener("mousedown", checkOutsideClick)

    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    }
  }, [searchStarted])

  return (
    <div className={classes.searchContainer} ref={searchRef}>
      <div className={classes.searchBarContent}>
        <div className={classes.searchBar}>
          <input
            type="search"
            onChange={searchChangeHander}
            className={classes.input}
            value={searchTerm}
            placeholder="Search for products"
          />
          <button onClick={searchClickHandler} className={classes.action}>
            <SearchIcon />
          </button>
        </div>
        {searchStarted &&
        <div className={classes.dropdown}>
          <SearchedProducts onClearSearch={clearSearchHandler} searchTerm={searchTerm} />
        </div>}
      </div>
    </div>
  );
};

export default HeaderSearch;
