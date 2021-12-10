import { ProductsContext } from "../../ProductsContext";
import { useContext } from "react";
export const ProductsList = () => {
  const data = useContext(ProductsContext);
  console.log(data);
  return <div>Products list</div>;
};
