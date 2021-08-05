import React from 'react';
import { Link } from 'react-router-dom';
import BannerDisplay from '../UI/BannerDisplay';
import classes from './SectionDisplay.module.scss';
import sideBannerImage from '../../assets/img/banner_1.jpg';

const SectionDisplay = props => { 
  return (
    <div className={classes.display}>
      <div className={classes.top_section}>
        <div className={classes.content}>
          {props.contentToDisplay}
        </div>
        <Link to="/" className={classes.banner}>
          <img src={sideBannerImage} alt="Grand display banner"/>
        </Link>
      </div>

      <BannerDisplay image={props.displayImage} />

      <div>
        <div className={classes.heading}>{props.bottomHeading}</div>
        <div className={classes.showProducts}>{props.productsToShow}</div>
      </div>
    </div>
  );
}

export default SectionDisplay;