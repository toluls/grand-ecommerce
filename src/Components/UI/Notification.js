import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './Notification.module.scss';

const Notification = () => {
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    let notificationTimer;
    if (notification) {
      const duration = (notification.time * 1000) || 4000;
      notificationTimer = setTimeout(() => {
        dispatch(uiActions.postNotification(false));
      }, duration);
    }
    
    return () => {
      if (notificationTimer) {
        clearTimeout(notificationTimer);
      }
    }
  }, [dispatch, notification]);

  if (notification) {
    return (
      <div className={classes.notification}>
        <p><strong>{notification.title}: </strong>{notification.message}</p>
      </div>
    );
  }
  return null;  
}

export default Notification;