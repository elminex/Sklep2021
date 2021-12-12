import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import { CartItem } from "../CartItem/CartItem";

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
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th> </th>
          </tr>
        </thead>
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
      </table>
    </div>
  );
};
