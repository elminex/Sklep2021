import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Social } from "../Social/Social";
import "./Header.scss";
import styled from "styled-components";
import { StyledButton } from "./../StyledButton/StyledButton";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <StyledHeader>
      <Logo>My shop</Logo>
      <MenuButton square type="button" onClick={() => setMenu(!menu)}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <nav className={menu ? "header__nav header__nav--active" : "header__nav"}>
        <NavLogo>My Shop</NavLogo>
        <NavButton square type="button" onClick={() => setMenu(!menu)}>
          <FontAwesomeIcon icon={faTimes} />
        </NavButton>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
              onClick={() => setMenu(!menu)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
              onClick={() => setMenu(!menu)}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
              onClick={() => setMenu(!menu)}
              to="/terms"
            >
              Terms and Conditions
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
              onClick={() => setMenu(!menu)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
              onClick={() => setMenu(!menu)}
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <Social container="header" />
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
   {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    border-bottom: 3px solid ${(props) => props.theme.yellow};
    margin-bottom: 32px;
    @media (min-width: 768px) {
      flex-direction: column;
    }
    @media (min-width: 992px) {
      flex-direction: row;
      padding: 20px 50px;
    }
  }
`;
const Logo = styled.h1`
   {
    font-family: "Fuzzy Bubbles", cursive;
    line-height: 2rem;
    text-align: center;
  }
`;

const NavLogo = styled(Logo)`
   {
    font-size: 2rem;
    padding: 32px 32px 0;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const NavButton = styled(StyledButton)`
   {
    position: absolute;
    top: 8px;
    right: 8px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const MenuButton = styled(StyledButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;
