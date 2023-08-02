const express = require("express");

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
router.post("/", (req, res) => {
  res.json({
    message: "Post a new workout",
  });
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
