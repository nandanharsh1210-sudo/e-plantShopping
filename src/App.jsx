import { Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function LandingPage() {
  return (
    <div className="background-image">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>

        <p>Discover beautiful plants for your home.</p>

        <Link to="/products">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;