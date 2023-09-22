import React from "react";
import Courses from "./Courses";

const CoursesList = ({
  onSelectCourse,
  jsonData,
  selectedCourse,
  totalCredit,
}) => {
  const dataList = jsonData;
  return dataList.map((course, i) => {
    return (
      <Courses
        key={i}
        course_name={course.course_name}
        course_details={course.course_details}
        image_url={course.image_url}
        credit={course.credit}
        price={course.price}
        selectedCourse={selectedCourse}
        onSelectCourse={onSelectCourse}
        totalCredit={totalCredit}
      />
    );
  });
};

export default CoursesList;
