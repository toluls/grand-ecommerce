import React from "react";
import classes from "./Header.module.scss";
import HeaderBrand from "./HeaderBrand";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import MobileMenuOpen from "../UI/MobileMenuOpen";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.section1}>
        <MobileMenuOpen />
        <HeaderBrand />
      </div>
      <div className={classes.section2}>
        <HeaderSearch />
        <HeaderCart />
      </div>
    </header>
  );
};

export default Header;
