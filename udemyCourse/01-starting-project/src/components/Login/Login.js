import React, { useReducer, useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// Email Reducer
const inputReducer = (state, action) => {
  let data = {};
  switch (action.type) {
    case "EMAIL_INPUT":
      data = {
        email: action.value,
        isValidEmail: null,
        password: state.password,
        isValidPassword: null,
      };

      break;
    case "EMAIL_BLUR":
      data = {
        email: state.email,
        isValidEmail: state.email.includes("@"),
        password: state.password,
        isValidPassword: null,
      };

      break;
    case "PASSWORD_INPUT":
      data = {
        email: state.email,
        isValidEmail: state.email.includes("@"),
        password: action.value,
        isValidPassword: null,
      };

      break;
    case "PASSWORD_BLUR":
      data = {
        email: state.email,
        isValidEmail: state.email.includes("@"),
        password: state.password,
        isValidPassword: state.password.trim().length > 6,
      };

      break;

    default:
      break;
  }
  return data;
};
// Password Reducer
const Login = (props) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, {
    email: "",
    isValidEmail: null,
    password: "",
    isValidPassword: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking Form validity");
      setFormIsValid(
        inputState.isValidEmail && inputState.isValidPassword
      );
    }, 600);

    return () => {
      console.log("rnning cleanup");
      clearTimeout(identifier);
    };
  }, [inputState]);
  const emailChangeHandler = (event) => {
    dispatchInput({ type: "EMAIL_INPUT", value: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchInput({ type: "PASSWORD_INPUT", value: event.target.value });
   
  };

  const validateEmailHandler = () => {
    dispatchInput({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchInput({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputState.email, inputState.password);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            inputState.isValidEmail === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={inputState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            inputState.isValidPassword === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
