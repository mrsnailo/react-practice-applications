import { useReducer, useState, useEffect } from "react";
import toast from "react-hot-toast";
const defaultInputState = {
  name: {
    value: "",
    validity: false,
  },
  email: {
    value: "",
    validity: false,
  },
  phone: {
    value: "",
    validity: false,
  },
  post: {
    value: "",
    validity: false,
  },
};

const validationReducer = (state, action) => {
  switch (action.name) {
    case "NAME_UPDATE":
      return {
        ...state,
        name: {
          value: action.value,
          validity: action.value.trim() !== "",
        },
      };
    case "EMAIL_UPDATE":
      return {
        ...state,
        email: {
          value: action.value,
          validity: /\S+@\S+\.\S+/.test(action.value),
        },
      };
    case "PHONE_UPDATE":
      return {
        ...state,
        phone: {
          value: action.value,
          validity: action.value.length < 12,
        },
      };
    case "POST_UPDATE":
      return {
        ...state,
        post: {
          value: action.value,
          validity: action.value.trim() !== "",
        },
      };
    default:
      break;
  }
};

const CheckoutForm = (props) => {
  const [isFormValid, setFormValidity] = useState(false);

  const [nameIsTouched, setNameTouchStatus] = useState(false);
  const [emailIsTouched, setEmailTouchStatus] = useState(false);
  const [phoneIsTouched, setPhoneTouchStatus] = useState(false);
  const [postIsTouched, setPostTouchStatus] = useState(false);

  const [inputAndValidity, dispatchAction] = useReducer(
    validationReducer,
    defaultInputState
  );

  const nameChangeHandler = (e) => {
    dispatchAction({ name: "NAME_UPDATE", value: e.target.value });
  };
  const emailChangeHandler = (e) => {
    dispatchAction({ name: "EMAIL_UPDATE", value: e.target.value });
  };
  const phoneChangeHandler = (e) => {
    dispatchAction({ name: "PHONE_UPDATE", value: e.target.value });
  };
  const postChangeHandler = (e) => {
    dispatchAction({ name: "POST_UPDATE", value: e.target.value });
  };

  const nameBlurHandler = () => {
    setNameTouchStatus(true);
  };

  const emailBlurHandler = () => {
    setEmailTouchStatus(true);
  };
  const phoneBlurHandler = () => {
    setPhoneTouchStatus(true);
  };
  const postBlurHandler = () => {
    setPostTouchStatus(true);
  };

  const handleFormSUbmission = (e) => {
    e.preventDefault();
  };

  const nameInputStyles = `
  block text-slate-900 py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none
  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer
  ${
    nameIsTouched && !inputAndValidity.name.validity
      ? "bg-red-200 border-red-600"
      : "bg-transparent border-gray-300"
  }
`;
  const emailInputStyles = `
  block text-slate-900 py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none
  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer
  ${
    emailIsTouched && !inputAndValidity.email.validity
      ? "bg-red-200 border-red-600"
      : "bg-transparent border-gray-300"
  }
`;
  const phoneInputStyles = `
  block text-slate-900 py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none
  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer
  ${
    phoneIsTouched && !inputAndValidity.phone.validity
      ? "bg-red-200 border-red-600"
      : "bg-transparent border-gray-300"
  }
`;
  const postInputStyles = `
  block text-slate-900 py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none
  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer
  ${
    postIsTouched && !inputAndValidity.post.validity
      ? "bg-red-200 border-red-600"
      : "bg-transparent border-gray-300"
  }
`;

  useEffect(() => {
    const nameInvalid = nameIsTouched && !inputAndValidity.name.validity;
    const emailInvalid = emailIsTouched && !inputAndValidity.email.validity;
    const phoneInvalid = phoneIsTouched && !inputAndValidity.phone.validity;
    const postInvalid = postIsTouched && !inputAndValidity.post.validity;

    switch (true) {
      case nameInvalid:
        toast.error("Name can not be Empty");
        break;
    
      case emailInvalid:
        toast.error("Please provide a valid Email address");
        break;
    
      case phoneInvalid:
        toast.error("Phone numbers must not be longer than 11 digits");
        break;
    
      case postInvalid:
        toast.error("Input a valid post");
        break;
    
      default:
        break;
    }
    
    const formIsValid =
      inputAndValidity.name.validity &&
      inputAndValidity.email.validity &&
      inputAndValidity.phone.validity &&
      inputAndValidity.post.validity;
    

    setFormValidity(formIsValid);
  }, [emailIsTouched, inputAndValidity, nameIsTouched, phoneIsTouched, postIsTouched]);

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={handleFormSUbmission}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            checkout form
          </h2>

          <div>
            <input
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              type="text"
              id="name"
              name="name"
              className={nameInputStyles}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <input
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              type="email"
              id="email"
              name="email"
              className={emailInputStyles}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <input
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              type="tel"
              id="phone"
              name="phone"
              className={phoneInputStyles}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="post" className="block text-gray-600 mb-2">
              Postal Code
            </label>
            <select
              onChange={postChangeHandler}
              onBlur={postBlurHandler}
              id="post"
              name="post"
              defaultValue=""
              className={postInputStyles}
              required
            >
              <option value="" disabled>
                Select a Postal code
              </option>
              <option value="1000">Dhaka 1000</option>
              <option value="1212">Dhaka 1212</option>
              <option value="4000">Chittagong 4000</option>
              <option value="7000">Khulna 7000</option>
              <option value="6000">Rajshahi 6000</option>
              <option value="5000">Sylhet 5000</option>
              <option value="3000">Comilla 3000</option>
            </select>
          </div>

          <div className="text-center">
            <button
              disabled={!isFormValid}
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-400"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
