import { useRef, useState } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountValid, setAmountValidity] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNUmber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNUmber < 1 ||
      enteredAmountNUmber > 5
    ) {
      setAmountValidity(false);
      return;
    }

    props.onAddToCart(enteredAmountNUmber);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className=" bg-red-800 text-white mx-3 my-2">add</button>
      {!amountValid && <p>Please enter a amount between 1-5 </p>}
    </form>
  );
};
export default MealItemForm;
