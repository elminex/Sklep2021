import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import { CartItem } from "../CartItem/CartItem";
import styled from "styled-components";

export const CartTable = () => {
  const { cart, setCart } = useContext(ProductsContext);
  const changeQuantity = (value, id) => {
    const newCart = cart.map((item) => {
      if (item.product.id === id) {
        item.quantity = value;
      }
      return item;
    });
    setCart(newCart);
  };
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.product.id !== id);
    setCart(newCart);
  };

  return (
    <Wrapper>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTableHeading>No.</StyledTableHeading>
            <StyledTableHeading>Name</StyledTableHeading>
            <StyledTableHeading>Price</StyledTableHeading>
            <StyledTableHeading>Quantity</StyledTableHeading>
            <StyledTableHeading> </StyledTableHeading>
          </tr>
        </StyledThead>
        <tbody>
          {cart.map((cartItem, index) => (
            <CartItem
              number={index + 1}
              key={cartItem.product.id}
              item={cartItem}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
   {
    width: 100%;
    overflow: auto;
    margin-bottom: 32px;
    @media (min-width: 768px) {
      flex: 4;
      margin: 0 16px 0 0;
    }
  }
`;
const StyledTable = styled.table`
   {
    width: 100%;
    border-collapse: collapse;
  }
`;

const StyledThead = styled.thead`
   {
    background-color: ${(props) => props.theme.backgroundGrey};
  }
`;

const StyledTableHeading = styled.th`
   {
    padding: 8px;
    color: ${(props) => props.theme.textBlack};
    font-size: 12px;
  }
`;
