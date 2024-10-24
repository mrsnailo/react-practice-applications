import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [bumpClass, setBumpClass] = useState(false); // State to control the bump effect

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (numberOfItems === 0) {
      return; // Don't trigger the animation if no items are present
    }

    // Trigger the animation
    setBumpClass(true);

    // Remove the class after the animation duration (e.g., 300ms for bump)
    const timer = setTimeout(() => {
      setBumpClass(false);
    }, 300); // Adjust this value according to your animation duration

    return () => {
      clearTimeout(timer); // Cleanup in case of fast consecutive updates
    };
  }, [numberOfItems]); // This effect will run every time the item count changes

  return (
    <>
      {console.log("re-rendering")}
      <button
        onClick={props.onClickCart}
        className={`rounded-m bg-teal-500 shadow-sm flex justify-between gap-2 ${
          bumpClass ? "animate-bump" : ""
        }`}
      >
        <span className="w-6 h-6">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="rounded-full bg-red-400 w-9">{numberOfItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
