import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AboutUs />} />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;