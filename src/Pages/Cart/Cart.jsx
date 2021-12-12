import styled from "styled-components";
import { CartTable } from "../../Components/CartTable/CartTable";

export const Cart = () => (
  <Wrapper>
    <Title>Shopping Cart</Title>
    <CartTable />
  </Wrapper>
);
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
