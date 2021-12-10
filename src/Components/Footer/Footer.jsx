import { NavLink } from 'react-router-dom';
import './Footer.scss';
import { Social } from '../Social/Social';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <div className="footer__logo">
        LOGO
      </div>
      <Social container="footer" />
    </div>
    <nav className="footer__nav">
      <ul className="footer__nav-list">
        <li className="footer__nav-item">
          <NavLink className={({ isActive }) => isActive ? "footer__link footer__link--active" : "footer__link"} to="/">Home</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className={({ isActive }) => isActive ? "footer__link footer__link--active" : "footer__link"} to="/shop">Shop</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className={({ isActive }) => isActive ? "footer__link footer__link--active" : "footer__link"} to="/terms">Terms and Conditions</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className={({ isActive }) => isActive ? "footer__link footer__link--active" : "footer__link"} to="/contact">Contact</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className={({ isActive }) => isActive ? "footer__link footer__link--active" : "footer__link"} to="/cart">Cart</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className={({ isActive }) => isActive ? "footer__link footer__link--active" : "footer__link"} to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>

  </footer>
);
