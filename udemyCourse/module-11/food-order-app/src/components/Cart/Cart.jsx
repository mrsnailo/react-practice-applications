import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import { IconContext } from "react-icons";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import CheckoutForm from "../checkout/checkOut";
const Cart = (props) => {
const [isExpanded, setIsExpanded] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addItemHandler = (item) => {
    const fixAmt = { ...item, amount: 1 };
    console.log(fixAmt);
    cartCtx.addItem(fixAmt);
  };
  const expandHandler = (e) => {
    e.preventDefault; 
    setIsExpanded(true);
  }
  const Button = (<button className="bg-transparent border-teal-500 text-black hover:bg-red-700" onClick={expandHandler}>Complete Checkout</button>);
  const cartItems = (
    <ul>
      <IconContext.Provider
        value={{ color: "teal", className: "global-class-name", size: "2em" }}
      >
        {cartCtx.items.map((item) => (
          <li
            className="flex p-4 bg-slate-200 shadow-slate-400 m-1 rounded-lg justify-between items-center"
            key={item.id}
          >
            <div className="item-details flex text-md font-bold items-center">
              <p className="mr-3">{item.name} </p>
              <p className="amount border-2 p-2 border-black rounded bg-orange-300">
                &times; {item.amount}
              </p>
            </div>
            <div className="item-actions flex cursor-pointer">
              <p
                onClick={() => removeItemHandler(item.id)}
                className="minus text-yellow-500 mx-2"
              >
                <AiFillMinusCircle />
              </p>
              <p
                onClick={() => addItemHandler(item)}
                className="plus text-teal-800"
              >
                <IoAddCircleSharp />
              </p>
            </div>
          </li>
        ))}
      </IconContext.Provider>
    </ul>
  );
  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="checkout-form">
      {isExpanded ? <CheckoutForm /> : Button}
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
