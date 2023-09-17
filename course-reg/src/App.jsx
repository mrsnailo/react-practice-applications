import React, { useState } from "react";
import courseData from "./data.json";
import CoursesList from "./components/Courses/CoursesList";
import CourseCart from "./components/Courses/CourseCart";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const courseDataJson = courseData;
  const [coursesSelected, updateCoursesSelected] = useState([]);
  const [totalprice, setTotalPrice] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const handleSelectedData = (sCourse) => {
    updateCoursesSelected((prevState) => {
      const currentSelcetions = [...prevState];
      currentSelcetions.push(sCourse);
      return currentSelcetions;
    });
    setTotalPrice((prevPrice) => {
      const newPrice = prevPrice + sCourse.coursePrice;
      return newPrice;
    });
    setTotalHour((prevHour) => {
      const newHour = prevHour + parseInt(sCourse.coursesCredit);
      return newHour;
    });
  };
  const clearCart = () => {
    updateCoursesSelected([]);
    setTotalHour(0);
    setTotalPrice(0);
    toast("Cart Cleared", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-2">
        Course Registration
      </h2>
      <div className="course-container container mx-auto flex justify-between my-8 gap-6">
        <div className="courses grid grid-cols-3 w-3/4 gap-6">
          <CoursesList
            jsonData={courseDataJson}
            totalCredit={totalHour}
            onSelectCourse={handleSelectedData}
          />
        </div>
        <div className="cart w-1/4">
          <CourseCart
            selectedCourse={coursesSelected}
            hour={totalHour}
            price={totalprice}
            onReset={clearCart}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default App;
