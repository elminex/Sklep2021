import styled from "styled-components";
import { StyledButton } from "../../Components/StyledButton/StyledButton";
import { useState } from "react";

export const ProductSidebar = ({
  quantity,
  quantityHandler,
  stock,
  cartHandler,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  if (stock) {
    return (
      <Wrapper>
        <StyledButton disabled={buttonClicked}
          onClick={() => {
            setButtonClicked(true);
            cartHandler();
          }}
        >
          {buttonClicked === true ? "Added to cart" : "Add to cart"}
        </StyledButton>
        <QuantityLabel>
          <QuantitySelect
            min={1}
            max={stock}
            value={quantity}
            onChange={quantityHandler}
          />
        </QuantityLabel>
        <Stock>In stock: {stock} </Stock>
      </Wrapper>
    );
  } else return <Wrapper>nothign in stock</Wrapper>;
};

const Stock = styled.p``;

const QuantitySelect = styled.input.attrs({
  id: "quantity",
  type: "number",
})``;

const QuantityLabel = styled.label`
  margin-top: 12px;
`;

const Wrapper = styled.div`
   {
    background-color: ${(props) => props.theme.backgroundGrey};
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px ) {
      margin-left: 60px;
      padding: 0 24px;
      max-height: 300px;
      justify-content: center;
    }
  }
`;
