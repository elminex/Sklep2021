import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../ProductsContext";
import { ProductSidebar } from "../../Components/ProductSidebar/ProductSidebar";
import styled from "styled-components";

export const ProductPage = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const { products, cart, setCart } = useContext(ProductsContext);

  useEffect(() => {
    if (products) {
      const singleProduct = products.find(
        (element) => element.id === params.id
      );
      setProduct(singleProduct);
    }
  }, [params, products]);

  const cartHandler = (event) => {
    const newCart = cart;
    newCart.push({ product: product, quantity: quantity });
    setCart(newCart);
  };

  const quantityHandler = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  if (product !== undefined) {
    return (
      <Wrapper>
        <div>
          <Image src={product.photo} />
          <ProductName> {product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>${product.price}</ProductPrice>
        </div>
        <ProductSidebar
          quantity={quantity}
          quantityHandler={quantityHandler}
          stock={product.stock}
          cartHandler={cartHandler}
        />
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
     max-height: 500px;
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
