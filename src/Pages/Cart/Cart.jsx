import styled from "styled-components";
import { CartTable } from "../../Components/CartTable/CartTable";
import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";

export const Cart = () => {
  const cart = useContext(ProductsContext).cart;
  if (cart.length === 0) {
    return <Title>There is nothing in cart</Title>;
  } else {
    return (
      <Wrapper>
        <Title>Shopping Cart</Title>
        <CartTable />
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
   {
    width: 100%;
  }
`;
const Title = styled.h2`
   {
    font-size: 24px;
    text-align: center;
    margin-bottom: 32px;
  }
`;
