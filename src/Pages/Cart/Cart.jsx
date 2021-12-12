
import styled from "styled-components";
import { CartTable } from "../../Components/CartTable/CartTable";

export const Cart = () => (
  <Wrapper>
    This is cart page
    <CartTable />
  </Wrapper>
);
const Wrapper = styled.div`
   {
    width: 100%;
  }
`;
