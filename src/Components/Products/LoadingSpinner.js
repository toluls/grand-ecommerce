import React from 'react';
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loading}></div>
    </div>
  );
}

export default LoadingSpinner;