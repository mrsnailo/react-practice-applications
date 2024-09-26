import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <button
        onClick={props.onClickCart}
        className="rounded-m bg-teal-500 shadow-sm flex justify-between gap-2"
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
