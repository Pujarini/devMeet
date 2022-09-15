const express = require("express");
const meetups = require("./data/meetups");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/meetups", (req, res) => {
  res.json(meetups);
});

app.get("/api/meetups/:meetup", (req, res) => {
  const meetup = meetups.find((item) => item.category === req.params.meetup);
  res.json(meetup);
});

app.listen(5002, console.log("server is running on 5002"));
