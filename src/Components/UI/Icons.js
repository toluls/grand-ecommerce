import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faBars, faTimes, faHome, faHeart, faTshirt, faTv, faLaptop, faQuestionCircle, faDotCircle, faMobileAlt, faSpa, faCaretUp } from '@fortawesome/free-solid-svg-icons';


export const CartIcon = () => {
  return <FontAwesomeIcon icon={faShoppingCart} />;
};

export const SearchIcon = () => {
  return <FontAwesomeIcon icon={faSearch} />;
};

export const MenuOpenIcon = () => {
  return <FontAwesomeIcon icon={faBars} />;
};

export const MenuCloseIcon = () => {
  return <FontAwesomeIcon icon={faTimes} />;
};

export const SpaIcon = () => {
  return <FontAwesomeIcon icon={faSpa} />;
};

export const ArrowUpIcon = () => {
  return <FontAwesomeIcon icon={faCaretUp} />;
};

export const HomeIcon = () => {
  return <FontAwesomeIcon icon={faHome} />;
};

export const HeartIcon = () => {
  return <FontAwesomeIcon icon={faHeart} />;
};

export const HelpIcon = () => {
  return <FontAwesomeIcon icon={faQuestionCircle} />;
};

export const TvIcon = () => {
  return <FontAwesomeIcon icon={faTv} />;
};

export const ComputingIcon = () => {
  return <FontAwesomeIcon icon={faLaptop} />;
};

export const PhoneIcon = () => {
  return <FontAwesomeIcon icon={faMobileAlt} />;
};

export const ProductIcon = () => {
  return <FontAwesomeIcon icon={faDotCircle} />;
};

export const FashionIcon = () => {
  return <FontAwesomeIcon icon={faTshirt} />;
};
