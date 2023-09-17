import React from "react";
import Courses from "./Courses";

const CoursesList = ({ onSelectCourse, jsonData, totalCredit}) => {
  const dataList = jsonData;
  return dataList.map((course) => {
    return (
      <Courses
        key={Math.random(2)}
        course_name={course.course_name}
        course_details={course.course_details}
        image_url={course.image_url}
        credit={course.credit}
        price={course.price}
        onSelectCourse={onSelectCourse}
        totalCredit={totalCredit}
      />
    );
  });
};

export default CoursesList;
