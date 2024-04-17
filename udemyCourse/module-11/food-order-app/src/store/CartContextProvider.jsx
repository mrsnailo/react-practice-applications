import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedCartItems = state.items.concat(action.item);
    console.log(updatedCartItems);
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      items: updatedCartItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCart = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
