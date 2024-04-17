import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li
          className="flex p-4 bg-slate-200 shadow-slate-400 m-1 rounded-lg justify-between"
          key={item.id}
        >
          <div className="item-details flex text-lg font-bold items-center"><p className="mr-3">{item.name} </p><p className="amount border-2 p-2 border-black rounded"> &times; 1</p></div>
          <div className="item-actions flex">
            <p className="minus text-yellow-500 mx-2"><CiSquareMinus className=" w-7" /></p>
            <p className="plus text-teal-800"><CiSquarePlus /></p>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.closeCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
