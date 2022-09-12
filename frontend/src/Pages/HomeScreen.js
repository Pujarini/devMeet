import React from "react";
import About from "../components/About";
import FindMeetups from "../components/FindMeetups";
import Footer from "../components/Footer";
import Meetups from "../components/Meetups";
import Navbar from "../components/Navbar";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <About />
      <Meetups />
      <FindMeetups />
      <Footer />
    </>
  );
};

export default HomeScreen;
