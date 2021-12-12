export const CartItem = ({ item, number, changeQuantity, removeItem }) => (
  <tr>
    <td>{number}</td>
    <td className="cart__table-name">{item.product.name}</td>
    <td className="cart__table-price">${item.product.price}</td>
    <td>
      <label htmlFor="quantity">
        Product quantity:
        <input
          min="1"
          max={item.product.stock}
          id="quantity"
          type="number"
          value={item.quantity}
          onChange={(e) =>
            changeQuantity(parseInt(e.target.value, 10), item.product.id)
          }
        />
      </label>
    </td>
    <td>
      <button
        className="cart__table-button"
        type="button"
        onClick={() => removeItem(item.product.id)}
      >
        X
      </button>
    </td>
  </tr>
);
