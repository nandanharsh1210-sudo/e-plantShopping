import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";
import Navbar from "./Navbar";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <>
      <Navbar />

      <div className="container">
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="plant-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button
                        disabled={isAdded}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {isAdded ? "Added" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;