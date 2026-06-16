import plants from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="container">
      {plants.map((plant) => {
        const added = cartItems.find(
          (item) => item.id === plant.id
        );

        return (
          <div key={plant.id} className="card">
            <img src={plant.image} alt={plant.name} />

            <h3>{plant.name}</h3>

            <p>{plant.category}</p>

            <p>${plant.price}</p>

            <button
              disabled={added}
              onClick={() => dispatch(addToCart(plant))}
            >
              {added ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;