import React from "react";
import People from "../images/people1.svg";

const About = () => {
  return (
    <div className="h-screen  flex items-center justify-between overscroll-none mx-auto p-6">
      <div className="p-8 w-full">
        <h1>
          It's easy to find <span className="text-green-400">Meetups</span> in
          your locations
        </h1>
        <h3 className="text-gray-500">
          Networking. Opportunities. Communities.
        </h3>
      </div>
      <div className="w-full">
        <img src={People} alt="meetup" className="p-6" />
      </div>
    </div>
  );
};

export default About;
