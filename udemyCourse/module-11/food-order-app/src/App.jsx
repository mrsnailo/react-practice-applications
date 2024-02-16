import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartVisible, setCartVisibility] = useState(false);

  const openCart = (props) => {
    setCartVisibility(true);
  };

  const closeCart = (props) => {
    setCartVisibility(false)
  }
  return (
    <>
      <Header showCart={openCart} />
      <Meals />
      {isCartVisible && <Cart />}
    </>
  );
}

export default App;
