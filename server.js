//Read .env configuration file from where the configuration properties data shall be read
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const employeeRoutes = require("./api/routes/employeeRoute");

//Connect to MongoDb Database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", err => console.error(err));
db.on("open", () => console.log("Connected to Mongoose ^_^"));


//Set up request method based on models and routes
app.use("/employee", employeeRoutes);


// Default/Home Request Mapping
app.use("/", (req, res, next) =>
  res.status(200).json({ message: "VISIT NEPAL 2020!" })
);

//Listening to the port
app.listen(process.env.PORT || process.env.TESTING_PORT);
