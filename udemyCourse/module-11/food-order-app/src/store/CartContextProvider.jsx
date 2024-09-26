import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const prevCartItems = state.items;
    const index = prevCartItems.findIndex((item) => item.id === action.item.id);
    let updatedCartItems;
    if (index !== -1) {
      updatedCartItems = [...prevCartItems];
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        amount: updatedCartItems[index].amount + action.item.amount,
      };
    } else {
      updatedCartItems = prevCartItems.concat(action.item);
    }
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedCartItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type == "REMOVE") {
    const prevCartItems = state.items;
    const index = prevCartItems.findIndex((item) => item.id === action.id);
    let updatedCartItems;
    const priceRemove = prevCartItems[index].price;
    if (index !== -1 && prevCartItems[index].amount > 1) {
      updatedCartItems = [...prevCartItems];
      updatedCartItems[index] = {
        ...updatedCartItems[index],
        amount: updatedCartItems[index].amount - 1,
      };
    } else {
      updatedCartItems = [...prevCartItems];
      updatedCartItems = updatedCartItems.filter((item) => item.id !== action.id);
    }
    const updatedAmount = state.totalAmount - priceRemove;
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
