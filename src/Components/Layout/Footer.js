import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import { ArrowUpIcon } from "../UI/Icons";
import brandLogo from "../../assets/img/grand-web.png";
import paymentLogo from "../../assets/img/payment-banner.png";
import { backToTop } from '../../utils/utils.js';

const Footer = () => {
  const backToTopHandler = () => {
   backToTop();
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop} onClick={backToTopHandler}>
        <ArrowUpIcon />
        <p>Back To Top</p>
      </div>
      <div className={classes.body}>
        <ul className={classes.list}>
          <li className={classes.item}><Link to="/">Home</Link></li>
          <li className={classes.item}><Link to="/products">Products</Link></li>
          <li className={classes.item}><Link to="/products">Today's Deals</Link></li>
          <li className={classes.item}><Link to="/customer-service">Customer Service</Link></li>
        </ul>
        <ul className={classes.list}>
          <li className={classes.item}><Link to="/customer-service/#contact">Contact Us</Link></li>
          <li className={classes.item}><Link to="/customer-service/#privacy">Privacy Policy</Link></li>
          <li className={classes.item}><Link to="/customer-service/#returns">Returns</Link></li>
          <li className={classes.item}><Link to="/customer-service/#delivery">Delivery</Link></li>
        </ul>
      </div>

      <div className={classes.logos}>
        <div className={classes.brand}>
          <img
            src={brandLogo}
            className={classes.logo}
            alt="Grand Fashion logo"
          />
        </div>
        <div className={classes.payment}>
          <img
            src={paymentLogo}
            className={classes.logo}
            alt="Payment logos"
          />
        </div>
      </div>
      <div className={classes.credit}>
        <p>
          © 2021 Grand Fashion.{" "}
          <a href="https://toluls.com" target="_blank" rel="noreferrer">
            Developed by Tolulope &#10148; toluls.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
