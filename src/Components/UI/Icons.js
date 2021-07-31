import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

export const CartIcon = () => {
  return <FontAwesomeIcon icon={faShoppingCart} />;
};

export const SearchIcon = () => {
  return <FontAwesomeIcon icon={faSearch} />;
};

export const MenuOpenIcon = () => {
  return <FontAwesomeIcon icon={faBars} />;
};

