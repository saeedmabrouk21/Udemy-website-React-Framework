const { readFileSync } = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/courses", (req, res) => {
  const courseId = req.query.courseId;
  const content = readFileSync("./data/detiledCourses/" + courseId + ".json");
  res.send(content);
});

app.get("/home", (req, res) => {
  const trackname = req.query.trackName;
  const content = readFileSync("./data/overview/" + trackname + "_res.json");
  res.send(content);
});

app.listen(3001, () => console.log("listening on port 3001"));
