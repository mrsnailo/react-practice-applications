import React from "react";
import Card from "../Card/card";
import { notifyError } from "../Notify/Notify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Courses = ({
  course_name,
  course_details,
  price,
  image_url,
  credit,
  selectedCourse,
  onSelectCourse,
  totalCredit,
}) => {
  // expermentall codes
  let isSelected = false;
  selectedCourse.map((item) => {
    if (item.courseName == course_name) {
      isSelected = true;
    }
  });
  // Button click handler
  const clickHandler = () => {
    const creditLim = totalCredit + parseInt(credit);
    const selectedCourse = {
      courseName: course_name,
      coursePrice: price,
      coursesCredit: credit,
    };
    if (creditLim < 21) {
      onSelectCourse(selectedCourse);
    } else {
      notifyError("Sorry, limit will exceed!");
    }
  };

  return (
    <>
      <Card>
        <img className="w-full" src={image_url} alt="image_cover" />
        <p className="title font-semibold my-4">{course_name}</p>
        <p className="course-details text-gray-500 text-sm">{course_details}</p>
        <div className="flex my-4 justify-between">
          <div className="price">
            <span>
              <FontAwesomeIcon
                className="mr-2"
                icon="fa-solid fa-dollar-sign"
                style={{ color: "#5e5c64" }}
              />
              Price: {price}
            </span>
          </div>
          <div className="hour">
            <span>
              <FontAwesomeIcon
                className="mr-2"
                icon="fa-solid fa-book"
                style={{ color: "#5e5c64" }}
              />
              Credit: {credit}hr
            </span>
          </div>
        </div>
        <button
          onClick={clickHandler}
          className={`w-full my-2 p-2 ${
            isSelected
              ? "hover:bg-gray-400 cursor-not-allowed"
              : "hover:bg-teal-300"
          }  rounded-md font-semibold text-xl text-white ${
            isSelected ? "bg-gray-400" : "bg-teal-500"
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
