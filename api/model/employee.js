const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
