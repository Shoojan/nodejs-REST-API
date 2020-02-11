if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

const express = require("express");
const app = express();

// Default/Home Request Mapping
app.use("/", (req, res, next) =>
  res.status(200).json({ message: "VISIT NEPAL 2020!" })
);

const port = process.env.PORT || process.env.TESTING_PORT;
app.listen(port);