const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router();

//GET ALL WORKOUTS
router.get("/", (req, res) => {
  //sending back a JSON string
  res.json({
    message: "Get all workout doc",
  });
});

//GET A SINGLE WORKOUT
router.get("/:id", (req, res) => {
  res.json({
    message: "Get a single workout doc",
  });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // res.json({
  //   message: "Post a new workout",
  // });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({
    message: "Delete a workout",
  });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({
    message: "Update a workout",
  });
});

module.exports = router;
