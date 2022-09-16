const express = require("express");
const meetupList = require("./data/meetups");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/meetups", (req, res) => {
  res.json(meetupList);
});

app.get("/api/meetups/:meetup", (req, res) => {
  const { meetups } = meetupList.find(
    (item) => item.category === req.params.meetup
  );
  console.log(meetups);
  res.json(meetups);
});

app.listen(5002, console.log("server is running on 5002"));
