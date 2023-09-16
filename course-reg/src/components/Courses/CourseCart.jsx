import React  from "react";
import Card from "../Card/card";
const CourseCart = ({ selectedCourse, price, hour, onReset }) => {
  let remHour = 20 - hour;
  const resetHandler = () => {
    onReset()
  }
  return (
    <Card className="">
      <p className="text-blue-700 font-bold">Credit Hour Remaining {remHour} hr <span onClick={resetHandler} className="text-3xl hover:cursor-pointer">&#x21bb;</span></p>
      <hr className="mx-auto w-full my-2" />
      <p className="title font-bold mb-2">Course name</p>
      <div className="course-list text-gray-500">
        <ol className="list-decimal text-sm ml-8">
          {selectedCourse.map((course) => {
          return(

            <li key={Math.random(2)}>{course.courseName}</li>
          )
          })}
        </ol>
      </div>
      <hr className="mx-auto w-full my-4" />
      <p className="credit-hour font-bold">Total credit hour: {hour}hr</p>
      <hr className="mx-auto w-full my-4" />
      <p className="credit-hour font-bold">Total Price : {price} USD </p>
    </Card>
  );
};

export default CourseCart;
