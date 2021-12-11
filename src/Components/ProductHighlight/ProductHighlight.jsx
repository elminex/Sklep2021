import { Link } from "react-router-dom";
import styled from "styled-components";
import "./../../variables.scss";

export const ProductHighlight = ({ elem }) => {
  console.log(elem);
  return (
    <StyledLink
      to={`/product/${elem.id}`}
      style={{ backgroundImage: `url(${elem.photo})` }}
    >
      <div>
        <Price>${elem.price}</Price>
        <ProductName>{elem.name}</ProductName>
      </div>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: block;
  color: ${(props) => props.theme.textBlack};
  width: 100%;
  height: 100%;
  padding: 24px 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-decoration: none;
  text-align: center;
`;

const Price = styled.p`
   {
    margin: 0 0 0 16px;
    font-size: 16px;
  }
`;
const ProductName = styled.h3`
   {
    font-size: 20px;
  }
`;
