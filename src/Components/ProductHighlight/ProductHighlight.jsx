import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductHighlight = ({ elem }) => {
  return (
    <StyledLink
      to={`/product/${elem.id}`}
      style={{ backgroundImage: `url(${elem.photo})` }}
    >
      <Overlay>
        <Price>${elem.price}</Price>
        <ProductName>{elem.name}</ProductName>
      </Overlay>
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
  position: relative;
`;

const Price = styled.p`
   {
    padding: 16px;
    margin: 0;
    font-size: 20px;
  }
`;
const ProductName = styled.h3`
   {
    font-size: 24px;
    padding 20px;
    margin: 0;
  }
`;

const Overlay = styled.div`
{background-color: rgba(245, 247, 250, 0.6);
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;}`;
