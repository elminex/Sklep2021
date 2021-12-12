import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { ProductSidebar } from "../../Components/ProductSidebar/ProductSidebar";
import styled from "styled-components";

export const ProductPage = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const data = useContext(ProductsContext);
  useEffect(() => {
    if (data) {
      const singleProduct = data.find((element) => element.id === params.id);
      setProduct(singleProduct);
      console.log(product);
    }
  }, [data, params, product]);

  const quantityHandler = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  }

  if (product !== undefined) {
    return (
      <Wrapper>
        <div>
          <Image src={product.photo} />
          <ProductName> {product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>
        </div>
        <ProductSidebar quantity={quantity} quantityHandler={quantityHandler} stock={product.stock}/>
      </Wrapper>
    );
  }
  return <div>loading</div>;
};

const Wrapper = styled.div`
   {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Image = styled.img`
   {
    margin-bottom: 16px;
  }
`;

const ProductName = styled.h3`
  font-size: 22px;
  font-weight: bold;
  padding: 8px 0;
  margin: 0;
  border-bottom: 1px solid ${(props) => props.theme.yellow};
`;

const ProductPrice = styled.p`
   {
  }
`;

const ProductDescription = styled.p`
   {
  }
`;
