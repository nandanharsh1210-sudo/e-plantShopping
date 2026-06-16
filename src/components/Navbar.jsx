import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  return (
    <nav className="navbar">
      <h2>Paradise Nursery</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
}

export default Navbar;