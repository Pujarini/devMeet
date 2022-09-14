import React, { useState } from "react";
import People from "../images/people.svg";

const Login = () => {
  const [emailId, setEmailId] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (emailId && password) {
      console.log(emailId, password);
    }

    // dispatch(login(email, password));
  };
  return (
    <div class="flex h-screen justify-around items-center">
      <div class="text-center border border-green-400 w-9/12 h-2/3 ml-6">
        <img
          src={People}
          alt="ppl"
          className="w-full flex items-center justify-center"
        />
      </div>

      <div class="flex items-center justify-center h-screen flex-col bg-green-100 w-9/12 h-2/3">
        <h2>Welcome to DevMeets</h2>
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 w-8/12"
          onSubmit={onSubmitHandler}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="emailid"
            >
              Email Id
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emailid"
              type="text"
              placeholder="Enter Email Id"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="flex items-center justify-between">
            <button
              class="border border-green-400 hover:bg-green-100 text-green-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mt-4">
            <p
              class="inline-block align-baseline font-bold text-sm  hover:text-green-500"
              href="#"
            >
              Don't have an account ?{" "}
              <span className="underline-offset-4">Sign Up</span>
            </p>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">&copy;DevMeets 2022</p>
      </div>
    </div>
  );
};

export default Login;
