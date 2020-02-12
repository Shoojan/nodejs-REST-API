const express = require("express");
const router = express.Router();

const employeeController = require("../controller/employeeController");

const checkAuth = require("../middleware/check-auth");

//Get all Employees list
router.get("/", employeeController.getAllEmployees);

//Get Single Employee
router.get("/:empId", employeeController.getEmployeeById);

//add Employee
router.post("/", checkAuth, employeeController.addEmployee);

//Update Employee
router.patch("/:empId", checkAuth, employeeController.updateEmployee);

//delete Employee
router.delete("/:empId", checkAuth, employeeController.deleteEmployee);

module.exports = router;
