import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState, useMemo } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [bumpClass, setBumpClass] = useState(false);

  // Memoize the number of items calculation
  const numberOfItems = useMemo(() => {
    return cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  }, [cartCtx.items]);

  useEffect(() => {
    if (numberOfItems === 0) return;

    setBumpClass(true);
    const timer = setTimeout(() => {
      setBumpClass(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [numberOfItems]);
  console.log("re-rendering")
  return (
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
  );
};

export default HeaderCartButton;
