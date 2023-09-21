import React, { useRef } from "react";
import Card from "../Card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartIcon from "../CartIcon/CartIcon";
const CourseCart = ({ count, selectedCourse, price, hour, onReset }) => {
  let remHour = 20 - hour;
  const resetHandler = () => {
    onReset();
  };
  // Scroll to cart

  return (
    <>
      <Card id="cart-section">
        <p className="text-blue-700 font-bold">
          Credit Hour Remaining {remHour} hr{" "}
        </p>
        <hr className="mx-auto w-full my-2" />
        <p className="title font-bold mb-2">Course name</p>
        <div className="course-list text-gray-500">
          <ol className="list-decimal text-sm ml-8">
            {selectedCourse.map((course, i) => {
              return <li key={i}>{course.courseName}</li>;
            })}
          </ol>
        </div>
        <hr className="mx-auto w-full my-4" />
        <p className="credit-hour font-bold">Total credit hour: {hour}hr</p>
        <hr className="mx-auto w-full my-4" />
        <div className="flex justify-between items-center">
          <p className="credit-hour font-bold">Total Price : {price} USD</p>
          <button
            onClick={resetHandler}
            type="button"
            className="px-3 hover:bg-teal-400 py-3 rounded"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              className="text-red-400 text-2xl"
            />
          </button>
        </div>
      </Card>
      <CartIcon Count={count} />
    </>
  );
};
export default CourseCart;
