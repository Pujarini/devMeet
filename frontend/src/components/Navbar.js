import React from "react";

export default function Navbar() {
  return (
    <nav className="relative container mx-auto  p-6">
      <div className="flex items-center justify-between ">
        <div className="text-green-400">
          Devs <span className="text-4xl font-bold text-green-400">M</span>eet
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="Post Meetups"
            className="hover:text-green-400 p-2 rounded-full"
          >
            Create a Meetup
          </a>
          <a
            href="Find Meetups"
            className="hover:text-green-400 p-2 rounded-full"
          >
            Find by locn
          </a>
        </div>
        <a
          className=" hidden md:block p-3 px-6 pt-2 rounded-full bg-green-400 text-white hover:bg-green-400"
          href="#about"
        >
          Login
          {/* <button class="bg-green-400 rounded-full p-4">Login</button> */}
        </a>
      </div>
    </nav>
  );
}
