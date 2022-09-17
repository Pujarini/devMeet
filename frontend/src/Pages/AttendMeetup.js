import React from "react";

const AttendMeetup = () => {
  return (
    <div className="bg-green-100">
      <div className="h-screen flex items-center justify-center p-4 rounded-lg shadow-lg bg-white m-auto bg-hero bg-contain bg-center bg-no-repeat w-4/5">
        <form>
          <h2 className="mb-4">Register for the event</h2>
          <div className="form-group h-full">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Name
              </span>
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput90"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="form-group mb-6">
            <label>
              <span>Email Id</span>
              <input
                type="email"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput91"
                placeholder="Email address"
              />
            </label>
          </div>
          <div className="form-group mb-6">
            <label>
              <span>Select your role</span>
              <select
                id="countries"
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option selected>Choose a role</option>
                <option value="Dev">Developer</option>
                <option value="SD">Senior Developer</option>
                <option value="lead">Team Lead</option>
                <option value="EM">Engineering Manager</option>
                <option value="oth">Others</option>
              </select>
            </label>
          </div>
          <div className="form-group mb-6">
            <label>
              <span>Why do you want to attend the event?</span>
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput91"
                placeholder="Give a reason"
              />
            </label>
          </div>

          <div className="form-group form-check text-center mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck96"
              checked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              for="exampleCheck96"
            >
              Are you attending the event?
            </label>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-green-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Register for event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttendMeetup;
