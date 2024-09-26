import React, { useState } from "react";
import CourseGoalList from "./components/CoureseGoalList/CourseGoalList";
import "./App.css";
import InputForm from "./components/InputForm/InputForm";
const App = () => {
  const [goalList, setGoalList] = useState([
    { id: "g2", name: "Learn React" },
    {
      id: "g1",
      name: "Learn c#",
    },
  ]);
  const handleCourseData = (datalist) => {
    setGoalList((prevGoals) => {
      // console.log(datalist);
      const updatesGoals = [...prevGoals];
      updatesGoals.unshift(datalist);
      return updatesGoals;
    });
  };
  const deleteItemHandler = (id) => {
    // console.log("executes for id : " + id);
    setGoalList((prevList) => {
      return prevList.filter((goal) => goal.id !== id);
    });
  };
  let content = <p className="no_content">No goals found, Maybe add some?</p>;

  if (goalList.length > 0) {
    content = (
      <CourseGoalList goals={goalList} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div className="app_body">
      <InputForm goals={goalList} onSaveCourse={handleCourseData} />
      <div className="course_list">
        <ul className="list">{content}</ul>
      </div>
    </div>
  );
};

export default App;
