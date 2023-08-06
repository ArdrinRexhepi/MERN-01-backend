require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//express app
const app = express();

//* we use next to go on to the next middleware

//*middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("req.path :>> ", req.path);
  console.log("req.method :>> ", req.method);

  next();
});

//req-request
//res-response
//*routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //we put it here because we only want to listen to request once we connect to db
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected todb && listening on port 4000!!");
    });
  })
  .catch((error) => {
    console.log("Error >>", error);
  });
