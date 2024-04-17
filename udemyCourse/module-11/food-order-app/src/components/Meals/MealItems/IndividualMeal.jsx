import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import MealItemForm from "./MealItemForm";

const IndividualMeal = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };
  return (
    <div className="meal flex border-b-2 border-white mb-4 justify-between">
      <div className="meal-info">
        <p className="name mb-3">{props.name}</p>
        <strong>{props.desc}</strong>
        <p className=" text-green-700 mb-2 mt-3 ">${props.price}</p>
      </div>
      <div className="meal-form text-right">
        <MealItemForm onAddToCart={addItemHandler} />
      </div>
    </div>
  );
};
export default IndividualMeal;
