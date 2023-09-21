import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
const CartIconContent = ({count}) => {
  const clickHandler = () => {
  }

  return (
    <div onClick={clickHandler} className="cart-icon fixed bottom-8 right-6 p-5 bg-[#d07bcf] rounded-full shadow-md">
      <div>
        <FontAwesomeIcon
          icon="fa-solid fa-cart-shopping"
          className="text-3xl"
        />
        <span className="bg-red-600 px-2 py-1 text-white font-bold rounded-full  ">{count.Count}</span>
      </div>
    </div>
  );
};

const CartIcon = (Count) => {
  return (
    <>
      {ReactDOM.createPortal(
        <CartIconContent count={Count} />,
        document.getElementById("floating-cart"),
      )}
    </>
  );
};

export default CartIcon;
