import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form action="">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
    </form>
  );
};
export default MealItemForm;
