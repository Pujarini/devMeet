import React from "react";
import { Link } from "react-router-dom";
import CreateImg from "../images/create.svg";

const FindMeetups = () => {
  return (
    <div className="bg-white-400 h-screen  flex items-center justify-between overscroll-none mx-auto p-6">
      <div className="w-full">
        <img src={CreateImg} alt="meetup" className="p-6" />
      </div>
      <div className="p-4 w-full">
        <h1>
          Create <span className="text-green-400">Meetups</span> whenever you
          like in <span className="text-green-400">2 mins</span> now
        </h1>
        <Link to="/createMeetup">
          <button class="bg-transparent border border-green-400 hover:bg-green-400 text-green font-bold py-2 px-4 rounded-full mt-4">
            Create your Meetup now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindMeetups;
