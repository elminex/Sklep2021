import { ProductsContext } from "../../ProductsContext";
import { useContext, useEffect, useState } from "react";
import { ProductHighlight } from "../../Components/ProductHighlight/ProductHighlight";
import styled from "styled-components";

export const MainPage = () => {
  const [topSellers, setTopSellers] = useState([]);
  const data = useContext(ProductsContext);
  useEffect(() => {
    if (data.products) {
      const sortedData = data.products.sort((a, b) => b.sales - a.sales).slice(0, 6);
      setTopSellers(sortedData);
    }
  }, [data]);
  if (topSellers.length > 0) {
    return (
      <div>
        <PageHeading>Top Selling items</PageHeading>
        <div>
          <ProductList>
            {topSellers.map((product) => {
              return (
                <ProductListItem key={product.id}>
                  <ProductHighlight elem={product} />
                </ProductListItem>
              );
            })}
          </ProductList>
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
};

const PageHeading = styled.h2`
  font-size: 28px;
  text-align: center;
  padding-bottom: 18px;
`;

const ProductList = styled.ul`
  padding: 0;
  @media (min-width: 768px) {
    columns: 200px 2;
  }
`;

const ProductListItem = styled.li`
  width: 100%;
  height: 300px;
  list-style-type: none;
  margin: 0;
  padding: 12px 0;
  border-bottom: 2px solid ${(props) => props.theme.yellow};
  @media (min-width: 768px) {
    columns: 200px 2;
  }
`;
