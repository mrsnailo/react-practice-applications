import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isCartVisible, setCartVisibility] = useState(false);

  const openCart = (props) => {
    setCartVisibility(true);
  };

  const closeCart = (props) => {
    setCartVisibility(false);
  };
  return (
    <CartContextProvider>
      <Header showCart={openCart} />
      <main>
        <Meals />
        {isCartVisible && <Cart closeCart={closeCart} />}
      </main>
    </CartContextProvider>
  );
}

export default App;
