import { ProductsContext } from "../../ProductsContext";
import { useContext } from "react";
import styled from "styled-components";
import { ProductPreview } from "../../Components/ProductPreview/ProductPreview";

export const Shop = () => {
  const products = useContext(ProductsContext).products;
  if (products) {
    return (
      <Wrapper>
        <ProductList>
          {products.map((item) => (
            <ProductListItem key={item.id}>
              <ProductPreview elem={item} />
            </ProductListItem>
          ))}
        </ProductList>
      </Wrapper>
    );
  }
  return <p>loading</p>;
};

const Wrapper = styled.div``;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin: 0 0 12px;
  }
`;

const ProductListItem = styled.li`
  border-bottom: 2px solid ${(props) => props.theme.yellow};
`;
