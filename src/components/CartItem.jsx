import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

        {cartItems.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} width="120" />

              <div>
                <h3>{item.name}</h3>

                <p>Unit Price: ${item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <p>Total: ${calculateTotalCost(item)}</p>

                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>

                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      );
                    }
                  }}
                >
                  -
                </button>

                <button onClick={() => dispatch(removeItem(item.id))}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CartItem;