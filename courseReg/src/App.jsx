import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// import other componenets
import courseData from "./data.json";
import CoursesList from "./components/Courses/CoursesList";
import CourseCart from "./components/Courses/CourseCart";
import { notify, NotifyContainer } from "./components/Notify/Notify";
const App = () => {
  const courseDataJson = courseData;
  const [coursesSelected, updateCoursesSelected] = useState([]);
  const [totalprice, setTotalPrice] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const handleSelectedData = (sCourse) => {
    // function to update Cart Items
    updateCoursesSelected((prevState) => {
      const currentSelcetions = [...prevState];
      currentSelcetions.push(sCourse);
      return currentSelcetions;
    });
    notify(
      <>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-check"
          className="text-green-500 mr-2 text-lg"
        />
        {sCourse.courseName} was added
      </>,
    );
    // update total price for selected course
    setTotalPrice((prevPrice) => {
      const newPrice = prevPrice + sCourse.coursePrice;
      return newPrice;
    });
    // update total hour for selected course
    setTotalHour((prevHour) => {
      const newHour = prevHour + parseInt(sCourse.coursesCredit);
      return newHour;
    });
  };
  // Clear the cart
  const clearCart = () => {
    updateCoursesSelected([]);
    setTotalHour(0);
    setTotalPrice(0);
    notify("Cart Cleared", "hi");
  };

  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-2">
        Course Registration
      </h2>
      <div className="course-container container mx-auto flex flex-col md:flex-row justify-center md:justify-between my-8 gap-6">
        <div className="courses grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 w-4/5 md:w-3/3 lg:w-3/4 order-2 gap-6">
          <CoursesList
            jsonData={courseDataJson}
            totalCredit={totalHour}
            selectedCourse={coursesSelected}
            onSelectCourse={handleSelectedData}
          />
        </div>
        <div className="cart order-1 mx-auto w-4/5 md:w-1/3 lg:w-1/4">
          <CourseCart
            selectedCourse={coursesSelected}
            hour={totalHour}
            price={totalprice}
            onReset={clearCart}
          />
        </div>
      </div>
      <NotifyContainer />
    </>
  );
};
export default App;
library.add(fab, fas, far);
