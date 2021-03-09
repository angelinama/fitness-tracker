const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3080;

const app = express();
const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//------------------html routes---------------------
app.get("/exercise", (req, res) => {
  //TODO get query string in get requst by req.query.id, see workout.js
  // if (req.query.id)
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

//-------------------api routes----------------------
app.get("/api/workouts", (req, res) => {
  //TODO totalDuration
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  //TODO totalDuration
  db.Workout.find({
    //last seven days
    day: {
      $gte: new Date(new Date().getDate() - 7),
    },
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
