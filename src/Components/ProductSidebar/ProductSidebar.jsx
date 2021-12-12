import styled from "styled-components";
import { StyledButton } from "../../Components/StyledButton/StyledButton";

export const ProductSidebar = ({quantity, quantityHandler, stock}) => {
  if (stock) {
    return (
      <Wrapper>
        <StyledButton>Add to cart</StyledButton>
        <QuantityLabel>
          <QuantitySelect
            min={1}
            max={stock}
            value={quantity}
            onChange={quantityHandler}
          />
        </QuantityLabel>
      </Wrapper>
    );
  }
  else return (<Wrapper>nothign in stock</Wrapper>);
};

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
  }
`;
