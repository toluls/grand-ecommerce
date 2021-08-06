import React from 'react';
import classes from './BannerDisplay.module.scss';

const BannerDisplay = props => {
  return (
    <div className={classes.banner}>
      <img src={props.image} alt="Grand display ad" className={classes.image} />
    </div>
  );
}

export default BannerDisplay;

 