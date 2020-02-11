const express = require('express');
const router = express.Router();

const employeeController = require('../controller/employeeController');

//Get all Employees list
router.get("/", employeeController.getAllEmployees);

//Get Single Employee
router.get("/:empId", employeeController.getEmployeeById);

//add Employee
router.post("/", employeeController.addEmployee);

//Update Employee
router.patch("/:empId", employeeController.updateEmployee);

//delete Employee
router.delete("/:empId", employeeController.deleteEmployee);

module.exports = router;