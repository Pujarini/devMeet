import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const Meetups = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/meetups");
      setMeetups(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="h-screen bg-green-400 p-6">
      <h1 className="text-center mt-4">Browse Meetups by category</h1>
      <div className="flex items-center justify-center flex-wrap">
        {meetups.map((meetup) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.4,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className="h-48 w-64 rounded m-8 p-6 bg-white flex item-center jutify-center flex-col cursor-pointer"
            >
              <h2 className="text-center">{meetup.category}</h2>
              <Link to={`/meetups/${meetup.category}`}>
                <p className="text-center m-6 text-gray-400 hover:underline">{`${meetup.meetups.length} meetups`}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Meetups;
