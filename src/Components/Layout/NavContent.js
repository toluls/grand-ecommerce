import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';
import classes from './NavContent.module.scss';
import { SpaIcon, FashionIcon, TvIcon, ComputingIcon, HelpIcon, ProductIcon, PhoneIcon, HomeIcon } from '../UI/Icons';

const NavContent = () => {
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(uiActions.openNav(false));
  }

  const NavItem = props => {
    return (
      <li className={classes.nav__item}>
        <Link to={props.to} onClick={closeMenuHandler}>
          <span className={classes.nav__icon}>{props.icon}</span>          
          {props.text}
        </Link>
      </li>
    );
  }

  return (
    <ul className={classes.nav}>
      <NavItem to="/" text="Home" icon={<HomeIcon />} />
      <NavItem to="/products" text="All Products" icon={<ProductIcon />} />
      <NavItem to="/products/electronics" text="Electronics" icon={<TvIcon />} />
      <NavItem to="/products/fashion" text="Fashion" icon={<FashionIcon />} />
      <NavItem to="/products/beauty" text="Beauty" icon={<SpaIcon />} />
      <NavItem to="/products/computing" text="Computing" icon={<ComputingIcon />} />
      <NavItem to="/products/phones" text="Phones" icon={<PhoneIcon />} />
      <NavItem to="/customer-service" text="Customer Service" icon={<HelpIcon />} />
    </ul>
  );
}

export default NavContent;