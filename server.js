//Read .env configuration file from where the configuration properties data shall be read
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const employeeRoutes = require("./api/routes/employeeRoute");
const userRoutes = require("./api/routes/userRoute");

//for logging purpose
app.use(morgan("dev"));

//Parse body data
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//CORS (Cross Origin Resourse Sharing) Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json();
  }
  next();
});

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
app.use("/user", userRoutes);

// Default/Home Request Mapping | Handling errors
app.use((req, res, next) => {
  const error = new Error("VISIT NEPAL 2020");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message
  });
});

//Listening to the port
app.listen(process.env.PORT || process.env.TESTING_PORT);
