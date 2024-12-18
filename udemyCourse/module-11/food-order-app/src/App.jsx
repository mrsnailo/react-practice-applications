import { useState } from "react";
import {toast, Toaster} from "react-hot-toast";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isCartVisible, setCartVisibility] = useState(false);

  const openCart = () => {
    setCartVisibility(true);
  };

  const closeCart = () => {
    setCartVisibility(false);
  };
  return (
    <CartContextProvider>
      <Header showCart={openCart} />
      <Toaster />
      <main>
        <Meals />
        {isCartVisible && <Cart closeCart={closeCart} />}
      </main>
    </CartContextProvider>
  );
}

export default App;
