import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductPreview = ({ elem }) => {
  function cutText(text, chars = 150) {
    if (chars < 1) {
      return "error";
    }
    if (text.length > chars) {
      const cutContent = `${text.substr(0, text.lastIndexOf(" ", chars))} ...`;
      return cutContent;
    }
    return text;
  }

  return (
    <StyledLink to={`/product/${elem.id}`}>
      <Name>{elem.name}</Name>
      <ProductMiddle>
        <ImageWrapper>
          <ProductImage src={elem.photo} alt={`${elem.name}`} />
        </ImageWrapper>
        <ProductRight>
          <DescriptionRight>{cutText(elem.description)}</DescriptionRight>
          <ProductCompany>
            Producent:
            <br />
            {elem.company}
          </ProductCompany>
          <PriceAndStockWrapper>
            {elem.stock > 0 ? (
              ""
            ) : (
              <DescriptionStock>Out of stock!</DescriptionStock>
            )}
            <ProductPrice>${elem.price}</ProductPrice>
          </PriceAndStockWrapper>
        </ProductRight>
      </ProductMiddle>
      <DescriptionBottom>{cutText(elem.description)}</DescriptionBottom>
    </StyledLink>
  );
};

const Name = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.textBlack};
`;

const ProductMiddle = styled.div`
  margin-top: 12px;
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 50%;
  max-height: 400px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductRight = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const DescriptionRight = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding-bottom: 8px;
    text-align: left;
    border-bottom: 2px solid ${(props) => props.theme.yellow};
  }
`;

const DescriptionBottom = styled.p`
  @media (min-width: 768px) {
    display: none;
  }
`;

const DescriptionStock = styled.span`
  color: red;
  text-align: right;
  line-height: 24px;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const PriceAndStockWrapper = styled.div`
   {
    display: flex;
    justify-content: flex-end;
  }
`;

const ProductPrice = styled.span`
  color: ${(props) => props.theme.yellow};
  font-size: 24px;
  margin-left: 24px;
`;

const ProductCompany = styled.span`
  font-size: 14px;
  text-align: right;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 24px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.textBlack};
`;
