import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Social } from "../Social/Social";
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
      <NavMenu menu={menu}>
        <NavLogo>My Shop</NavLogo>
        <NavButton square type="button" onClick={() => setMenu(!menu)}>
          <FontAwesomeIcon icon={faTimes} />
        </NavButton>
        <NavList>
          <NavItem>
            <StyledNavLink onClick={() => setMenu(!menu)} to="/">
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink onClick={() => setMenu(!menu)} to="/shop">
              Shop
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink onClick={() => setMenu(!menu)} to="/cart">
              Cart
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink onClick={() => setMenu(!menu)} to="/contact">
              Contact
            </StyledNavLink>
          </NavItem>
        </NavList>
        <Social container="header" />
      </NavMenu>
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
  @media (min-width: 996px) {
    flex: 1;
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

const NavMenu = styled.nav`
   {
    position: absolute;
    left: ${(props) => (props.menu ? "0" : "-305px")};
    top: 0;
    z-index: 20;
    width: 300px;
    overflow: hidden;
    transition: left 0.3s;
    background-color: white;
    box-shadow: 1px 1px 5px black;
    @media (min-width: 768px) {
      position: static;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      box-shadow: none;
    }
    @media (min-width: 996px) {
      flex: 4;
    }
  }
`;
const NavList = styled.ul`
   {
    list-style-type: none;
    padding: 0;
    @media (min-width: 768px) {
      text-align: right;
    }
  }
`;

const NavItem = styled.li`
   {
    padding: 20px 0 20px 56px;
    font-size: 14px;
    @media (min-width: 768px) {
      display: inline-block;
      padding: 16px 24px;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.textBlack};
  text-transform: uppercase;
  transition: color 0.2s;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -56px;
    transform: translateY(-50%);
    width: 0;
    height: 4px;
    background-color: ${(props) => props.theme.yellow};
    transition: all 0.3s;
  }

  &:hover {
    color: ${(props) => props.theme.yellow};
  }

  &.active {
    &:after {
      width: 48px;
    }
  }
  @media (min-width: 768px) {
    &:after {
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      color: $yellow;
    }

    &.active {
      &:after {
        width: 60px;
      }
    }
  }
`;
