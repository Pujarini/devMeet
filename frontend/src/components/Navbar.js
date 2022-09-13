import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative sticky top-0 shadow-xl  w-full container mx-auto p-6">
      <div className="flex items-center justify-between ">
        <div className="text-green-400">
          <Link to="/">
            Devs <span className="text-4xl font-bold text-green-400">M</span>eet
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/createMeetup">
            <p className="hover:text-green-400 p-2">Create a Meetup</p>
          </Link>
          <Link to="/meetups">
            <p className="hover:text-green-400 p-2">Find meetups</p>
          </Link>
        </div>
        <Link to="/login">
          <p
            className=" hidden md:block p-3 px-6 pt-2 rounded-full bg-green-400 text-white hover:bg-green-400"
            href="#about"
          >
            Login
          </p>
        </Link>
      </div>
    </nav>
  );
}
