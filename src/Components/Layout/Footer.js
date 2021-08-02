import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import { ArrowUpIcon } from "../UI/Icons";
import brandLogo from "../../assets/img/grand-web.png";
import paymentLogo from "../../assets/img/payment-banner.png";

const Footer = () => {
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__top} onClick={backToTopHandler}>
        <ArrowUpIcon />
        <p>Back To Top</p>
      </div>
      <div className={classes.footer__body}>
        <div>
          <p className={classes.footer__item}>
            <Link to="/" className={classes.footer__link}>
              Home
            </Link>
          </p>
          <p className={classes.footer__item}>
            <Link to="/products" className={classes.footer__link}>
              Products
            </Link>
          </p>
          <p className={classes.footer__item}>
            <Link to="/wish-list" className={classes.footer__link}>
              Today's Deals
            </Link>
          </p>
          <p className={classes.footer__item}>
            <Link to="/customer-service" className={classes.footer__link}>
              Customer Service
            </Link>
          </p>
        </div>

        <div>
          <p className={classes.footer__item}>
            <Link to="/customer-service" className={classes.footer__link}>
              Contact Us
            </Link>
          </p>
          <p className={classes.footer__item}>
            <Link to="/customer-service" className={classes.footer__link}>
              Privacy Policy
            </Link>
          </p>
          <p className={classes.footer__item}>
            <Link to="/customer-service" className={classes.footer__link}>
              Returns
            </Link>
          </p>
          <p className={classes.footer__item}>
            <Link to="/customer-service" className={classes.footer__link}>
              Delivery
            </Link>
          </p>
        </div>
      </div>

      <div className={classes.footer__logos}>
        <div className={classes.footer__brand}>
          <img
            src={brandLogo}
            className={classes.footer__logo}
            alt="Grand Fashion logo"
          />
        </div>
        <div className={classes.footer__payment}>
          <img
            src={paymentLogo}
            className={classes.footer__logo}
            alt="Payment logos"
          />
        </div>
      </div>
      <div className={classes.footer__credit}>
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
