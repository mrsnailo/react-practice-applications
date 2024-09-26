import Card from "../../UI/Card";
import IndividualMeal from "./IndividualMeal";
const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const MealItems = DUMMY_MEALS.map((meal) => (
    <IndividualMeal
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return <section className=" max-w-4xl mx-auto my-4 bg-slate-300 text-black p-5 rounded-md shadow-sm">{MealItems}</section>;
};

export default AvailableMeals;
