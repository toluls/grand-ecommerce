import React from 'react';
import classes from './Footer.module.scss';
import { ArrowUpIcon } from '../UI/Icons';

const Footer = () => {
  const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__top} onClick={backToTopHandler}>
        <ArrowUpIcon />
        <p>Back To Top</p>
      </div>
      <div className={classes.footer__body}>
        <a className={classes.footer__item}>one</a>
        <p className={classes.footer__item}>one</p>
        <p className={classes.footer__item}>three</p>
        <p className={classes.footer__item}>four</p>
      </div>
      <div className={classes.footer__credit}>
        <p>© 2021, Grand Fashion. <a href="https://toluls.com" target="_blank" rel="noreferrer">Developed by Tolulope - toluls.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;