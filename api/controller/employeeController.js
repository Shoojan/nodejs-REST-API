const mongoose = require("mongoose");
const joi = require("joi");
const Employee = require("../model/employee");

exports.getAllEmployees = (req, res, next) => {
  Employee.find()
    .select("_id name position")
    .exec()
    .then(employeeList => {
      res.status(200).json({
        count: employeeList.length,
        employees: employeeList.map(employee => {
          return {
            _id: employee._id,
            name: employee.name,
            position: employee.position
          };
        })
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.getEmployeeById = (req, res, next) => {
  const id = req.params.empId; //empId should match request parameter
  Employee.findById(id)
    .select("_id name position")
    .exec()
    .then(employeeData => res.status(200).json(employeeData))
    .catch(err => res.status(500).json(err));
};

exports.addEmployee = (req, res, next) => {
  //JOI Validation
  const schema = joi.object().keys({
    name: joi
      .string()
      .trim()
      .required(),
    position: joi
      .string()
      .trim()
      .required()
  });

  joi.validate(req.body, schema, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      const employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        position: req.body.position
      });
      employee
        .save()
        .then(result =>
          res.status(200).json({
            message: "Employee " + employee.name + " added!",
            employee: employee
          })
        )
        .catch(err => res.status(500).json(err));
    }
  });
};

exports.updateEmployee = (req, res, next) => {
  const id = req.params.empId; //empId should match request parameter
  Employee.update({ _id: id }, { $set: req.body })
    .exec()
    .then(() =>
      res.status(200).json({
        message: "Employee [" + id + "] updated!"
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.deleteEmployee = (req, res, next) => {
  const id = req.params.empId; //empId should match request parameter
  Employee.remove({ _id: id })
    .exec()
    .then(() =>
      res.status(200).json({
        message: "Employee [" + id + "] deleted!"
      })
    )
    .catch(err => res.status(500).json(err));
};
