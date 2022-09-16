import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Brand from "../images/brand.svg";

const MeetupByCategory = () => {
  const { meetup } = useParams();
  const [meetupList, setMeetupList] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      const { data } = await axios.get(`/api/meetups/${meetup}`);
      setMeetupList(data);
    };
    fetchMeetups();
  }, []);
  return (
    <div>
      <Link to="/">
        <button class="bg-transparent-500 hover:bg-green-400 outline outline-green-500 text-blue font-bold py-2 px-4  m-4 rounded-full">
          Back
        </button>
      </Link>
      <h1 className="text-center">Upcoming Events</h1>

      <div className="flex items-center jutify-center flex-wrap gap-4 border m-8">
        {meetupList.map((item) => {
          return (
            <div class="flex justify-center items-center">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center w-96">
                <div class="py-3 px-6 border-b border-gray-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  {item.location}
                </div>
                <div class="p-4 border flex items-center justify-center">
                  <div className="w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt={item.name}
                      className="object-fill h-52 w-96"
                    />
                  </div>
                  <div className="w-2/3">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      {item.name}
                    </h5>
                    <p class="text-gray-700 text-base mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center m-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.participants} participants
                    </div>
                    <Link to="/meetups/register">
                      <button
                        type="button"
                        class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Attend
                      </button>
                    </Link>
                  </div>
                </div>

                <div class="py-3 px-6 border-t border-gray-300 text-gray-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 fill-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>

                  {item.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetupByCategory;
