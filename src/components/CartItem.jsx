import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Cost: ${total}</h2>

      {items.map((item) => (
        <div key={item.id} className="cart-card">
          <img src={item.image} alt={item.name} />

          <div>
            <h3>{item.name}</h3>

            <p>${item.price}</p>

            <p>Total: ${item.price * item.quantity}</p>

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(removeItem(item.id))
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;