import React from "react";
import CourseGoalItem from "../CoureseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
  return props.goals.map((item) => {
    return <CourseGoalItem onDelete={props.onDeleteItem} key={item.id} course={item.name} courseId={item.id} />;
  });
};

export default CourseGoalList;
