import Card from "../../UI/Card";
import IndividualMeal from "./IndividualMeal";
import useFetch from "../../../hooks/useFetch";
import MealLoader from "../../Loader/MealLoader"; // Assuming this is the correct import

const AvailableMeals = () => {
  const {
    data,
    loading: isLoading,
    error,
  } = useFetch(
    "https://react-http-655f1-default-rtdb.firebaseio.com/meals.json",
    { method: "GET" },
  );
  let MealItems;
  if (isLoading) {
    return <MealLoader />;
  } else if (error) {
    MealItems = (
      <p className="text-red-700 text-center">Error fetching meals: {error}</p>
    );
  } else if (data && data.length > 0) {
    MealItems = data.map((meal) => (
      <IndividualMeal
        id={meal.id}
        key={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
      />
    ));
  } else {
    MealItems = <p>No meals available.</p>;
  }

  return (
    <section className="max-w-4xl mx-auto my-4 bg-slate-300 text-black p-5 rounded-md shadow-sm">
      {MealItems}
    </section>
  );
};

export default AvailableMeals;
