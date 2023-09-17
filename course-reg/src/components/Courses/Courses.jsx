import React, { useState } from "react";
import Card from "../Card/card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Courses = ({
  course_name,
  course_details,
  price,
  image_url,
  credit,
  onSelectCourse,
  totalCredit,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(isSelected);

  // Button click handler

  const clickHandler = () => {
    setIsSelected(() => {
      console.log(" function reference is ok ");
      return true;
    });
    const creditLim = totalCredit + parseInt(credit);
    const selectedCourse = {
      courseName: course_name,
      coursePrice: price,
      coursesCredit: credit,
    };
    if (creditLim < 21) {
      onSelectCourse(selectedCourse);
      toast(`${course_name} was added`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Sorry Credit Limit will exceed", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Card>
        <img src={image_url} alt="image_cover" />
        <p className="title font-semibold my-4">{course_name}</p>
        <p className="course-details text-gray-500 text-sm">{course_details}</p>
        <div className="flex my-4 justify-between">
          <div className="price">$ Price: {price}</div>
          <div className="hour">
            <span>&#x1F4D6;</span> Credit: {credit}hr
          </div>
        </div>
        <button
          onClick={clickHandler}
          className={`w-full my-2 p-2 hover:bg-teal-500 rounded-md font-semibold text-xl text-white ${
            isSelected ? "bg-teal-500" : "bg-blue-500"
          }`}
          type="button"
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </Card>
    </>
  );
};

export default Courses;
