import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/CartContext";
import { IconContext } from "react-icons";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import CheckoutForm from "../checkout/checkOut";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";

const Cart = (props) => {
  const [orderConfig, setOrderConfig] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, loading, error } = useFetch(
    shouldFetch ? "https://react-http-655f1-default-rtdb.firebaseio.com/orders.json" : null, 
    orderConfig
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    const fixAmt = { ...item, amount: 1 };
    cartCtx.addItem(fixAmt);
  };

  const expandHandler = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  const Button = (
    <button
      className="bg-transparent border-teal-500 text-black hover:bg-red-700"
      onClick={expandHandler}
    >
      Complete Checkout
    </button>
  );

  const handleOrder = (userData) => {
    const orderData = {
      orderedItems: cartCtx.items,
      userInfo: userData,
      totalAmount: cartCtx.totalAmount,
    };

    setOrderConfig({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: orderData,
    });

    // Trigger the fetch
    setShouldFetch(true);
  };

  useEffect(() => {
    if (data.length != 0) {
      // Order submitted successfully
      toast.success("Order Processed Successfully")

      // Clear the cart
      cartCtx.clearCart(); // Ensure this method exists in your CartContext

      // Close the cart modal and reset fetch state
      props.closeCart();
      setShouldFetch(false);
    }
  }, [data, cartCtx, props]);

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
      <div className={`${classes.action} flex justify-end gap-2`}>
        <button
          onClick={props.closeCart}
          className="bg-transparent border-teal-500 text-black hover:bg-red-700"
        >
          Close
        </button>
        <div className="checkout-form">{!isExpanded && Button}</div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-blue-500 p-2">
          Submitting order...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-red-500 p-2">
          Error submitting order: {error}
        </div>
      )}

      {/* checkout form */}
      {isExpanded && <CheckoutForm onConfirmOrder={handleOrder} />}
    </Modal>
  );
};

export default Cart;