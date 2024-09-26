import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./InputForm.module.css";
const InputForm = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [isValid, setValidity] = useState("true");
  const nameChangeHandler = (event) => {
    setValidity(true);
    setCurrentName(event.target.value);
  };

  const LastID = (props) => {
    if (props.goals.length === 0) {
      return "0";
    } else {
      const idn = props.goals[0].id.slice(1);
      return idn;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (currentName.trim() == 0) {
      setValidity(false);
    } else {
      const goals = {
        id: "g" + (Number(LastID(props)) + 1),
        name: currentName,
      };

      setCurrentName("");
      props.onSaveCourse(goals);
    }
  };
  return (
    <div className="form__wrapper">
      <form onSubmit={formSubmitHandler}>
        <div className={`${styles.form_content} ${!isValid && styles.err} `}>
          <label>Course Goal</label>
          <input
            // style={{borderColor: !isValid ? "red" : "black", backgroundColor: !isValid ? "salmon" : "transparent"}}
            onChange={nameChangeHandler}
            value={currentName}
            type="text"
            name="courseGoal"
          />
          <Button type="submit">Add Course</Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
