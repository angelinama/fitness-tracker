const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const User = mongoose.model("Workout", WorkoutSchema);

module.exports = User;
