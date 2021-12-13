import { NavLink } from "react-router-dom";
import { Social } from "../Social/Social";
import styled from "styled-components";

export const Footer = () => (
  <StyledFooter>
    <FooterSidebar>
      <Logo>My Shop</Logo>
      <Social container="footer" />
    </FooterSidebar>
    <FooterNav>
      <FooterNavList>
        <FooterListItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </FooterListItem>
        <FooterListItem>
          <StyledNavLink to="/shop">Shop</StyledNavLink>
        </FooterListItem>
        <FooterListItem>
          <StyledNavLink to="/cart">Cart</StyledNavLink>
        </FooterListItem>
        <FooterListItem>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </FooterListItem>
      </FooterNavList>
    </FooterNav>
  </StyledFooter>
);

const StyledFooter = styled.footer`
   {
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.backgroundBlack};
    padding: 50px 12px;
    display: flex;
    @media (min-width: 576px) {
        padding: 50px 12px;
        align-items: center;
        justify-content: space-around;
  }
`;

const FooterSidebar = styled.div`
   {
    flex: 3;
    text-align: center;
    @media (min-width: 992px) {
      flex: 1;
    }
  }
`;
const Logo = styled.div`
   {
    font-family: "Fuzzy Bubbles", cursive;
    color: ${(props) => props.theme.textWhite};
    font-size: 3rem;
    margin-bottom: 20px;
    @media (min-width: 576px) {
      font-size: 3rem;
    }
  }
`;

const FooterNav = styled.nav`
   {
    display: none;
    flex: 5;
    @media (min-width: 576px) {
       {
        display: block;
      }
    }
    @media (min-width: 992px) {
      flex: 3;
      text-align: center;
    }
  }
`;

const FooterNavList = styled.ul`
   {
    margin: 0;
    list-style-type: none;
    padding: 0;
    columns: 2;
    @media (min-width: 992px) {
      columns: 5;
      display: flex;
      justify-content: center;
    }
    & .active {
      color: ${(props) => props.theme.yellow};
    }
  }
`;

const FooterListItem = styled.li`
   {
    padding: 12px 20px;
    font-size: 14px;
    @media (min-width: 992px) {
      &__nav-item {
        display: inline-block;
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
   {
    position: relative;
    text-decoration: none;
    color: ${(props) => props.theme.textWhite};
    text-transform: uppercase;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.yellow};
    }
  }
`;
