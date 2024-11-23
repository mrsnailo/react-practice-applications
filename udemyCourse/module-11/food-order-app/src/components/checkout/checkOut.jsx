import { useRef, useState } from "react";
const CheckoutForm = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const postInputRef = useRef();

  const [invalidInput, setInputValidity] = useState({
    name: false,
    email: false,
    phone: false,
    post: false,
  });

  const handleFormSUbmission = (e) => {
    e.preventDefault();
    const fullname = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const post = postInputRef.current.value;
    const phone = phoneInputRef.current.value;

    const checkErrors = {
      name: fullname.trim() == "",
      email: !/\S+@\S+\.\S+/.test(email),
      phone: phone.length < 10,
      post: post.trim() == "",
    };
  };

  return (
    <>
      <div>
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            checkout form
          </h2>

          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="post" className="block text-gray-600 mb-2">
              Postal Code
            </label>
            <select
              id="post"
              name="post"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled selected>
                Select a postal code
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
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
