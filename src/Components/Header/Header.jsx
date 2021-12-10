import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Social } from '../Social/Social';
import './Header.scss';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <h1 className="header__logo">Shop name</h1>
      <button className="header__nav-button" type="button" onClick={() => setMenu(!menu)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={menu ? 'header__nav header__nav--active' : 'header__nav'}>
        <div className="header__nav-logo">LOGO</div>
        <button className="header__nav-close" type="button" onClick={() => setMenu(!menu)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"} onClick={() => setMenu(!menu)} to="/">Home</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"} onClick={() => setMenu(!menu)}to="/shop">Shop</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"} onClick={() => setMenu(!menu)}to="/terms">Terms and Conditions</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"} onClick={() => setMenu(!menu)} to="/contact">Contact</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"} onClick={() => setMenu(!menu)} to="/cart">Cart</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"} onClick={() => setMenu(!menu)} to="/search">Search</NavLink>
          </li>
        </ul>
        <Social container="header" />
      </nav>
    </header>
  );
};
