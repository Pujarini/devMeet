import React from "react";
import Profile from "../images/profile.svg";
import People from "../images/people.svg";
import Search from "../images/search.svg";
import Events from "../images/events.svg";
import Brand from "../images/brand.svg";

const Footer = () => {
  return (
    <div className="h-screen ">
      <div className="h-2/3 bg-white-400 w-full">
        <h1 className="text-center mt-8">
          Meetups like never before in few steps
        </h1>
        <div className="flex items-center justify-between p-6">
          <div className="border border-white">
            <img
              src={Brand}
              alt="create"
              className="object-contain h-80 w-96"
            />
            <p className="mt-3 text-center">Create Meetups</p>
          </div>
          <div className="flex item-center justify-center flex-col">
            <img
              src={Search}
              alt="create"
              className="object-contain h-80 w-96"
            />
            <p className="text-center mt-3">Search Meetups</p>
          </div>
          <div>
            <img
              src={People}
              alt="create"
              className="object-contain h-80 w-96"
            />
            <p className="text-center mt-3">Network</p>
          </div>
        </div>
      </div>
      <div className="h-1/3 shadow-lg">made with love </div>
    </div>
  );
};

export default Footer;
