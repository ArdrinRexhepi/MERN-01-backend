const express = require("express");
const {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

//GET ALL WORKOUTS
router.get("/", getWorkouts);

//GET A SINGLE WORKOUT
router.get("/:id", getSingleWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
