const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "workout type is Required",
      },
      name: {
        type: String,
        trim: true,
        required: "workout name is Required",
      },
      duration: {
        type: Number,
        required: "duration is required",
        validate: {
          validator: function (v) {
            return !Number.isNaN(v);
          },
          message: "{VALUE} is not an integer value",
        },
      },
      distance: {
        type: Number,
        validate: {
          validator: function (v) {
            return !Number.isNaN(v);
          },
          message: "{VALUE} is not an integer value",
        },
      },
      weight: {
        type: Number,
        validate: {
          validator: function (v) {
            return !Number.isNaN(v);
          },
          message: "{VALUE} is not an integer value",
        },
      },
      reps: {
        type: Number,
        validate: {
          validator: Number.isInteger,
          message: "{VALUE} is not an integer value",
        },
      },
      sets: {
        type: Number,
        validate: {
          validator: Number.isInteger,
          message: "{VALUE} is not an integer value",
        },
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
