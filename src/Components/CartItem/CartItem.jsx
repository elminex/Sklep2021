import styled from "styled-components";
import { StyledButton } from "../StyledButton/StyledButton";

export const CartItem = ({ item, number, changeQuantity, removeItem }) => (
  <tr>
    <StyledTd>{number}</StyledTd>
    <StyledTd>{item.product.name}</StyledTd>
    <StyledTd>${item.product.price}</StyledTd>
    <StyledTd>
      <label htmlFor="quantity">
        <input
          min="1"
          max={item.product.stock}
          id="quantity"
          type="number"
          value={item.quantity}
          onChange={(e) =>
            changeQuantity(parseInt(e.target.value, 10), item.product.id)
          }
        />
      </label>
    </StyledTd>
    <StyledTd>
      <StyledButton square
        className="cart__table-button"
        type="button"
        onClick={() => removeItem(item.product.id)}
      >
        X
      </StyledButton>
    </StyledTd>
  </tr>
);

const StyledTd = styled.td`
   {
    padding: 12px;
    text-align: center;
  }
`;
