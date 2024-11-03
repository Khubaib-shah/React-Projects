import { Await } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    // console.log("cartItems" , [cartItems, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    console.log();
  };

  return (
    <>
      <Home
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </>
  );
}

export default App;
