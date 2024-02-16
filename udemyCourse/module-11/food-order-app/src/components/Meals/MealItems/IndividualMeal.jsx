import MealItemForm from "./MealItemForm";

const IndividualMeal = (props) => {

  return (
    <div className="meal flex border-b-2 border-white mb-4 justify-between">
      <div className="meal-info">
        <p className="name mb-3">{props.name}</p>
        <strong>{props.desc}</strong>
        <p className=" text-green-700 mb-2 mt-3 ">${props.price}</p>
      </div>
      <div className="meal-form text-right">
        <MealItemForm />
        <button className=" bg-red-800 text-white mx-3 my-2">add</button>
      </div>
    </div>
  );
};
export default IndividualMeal;

