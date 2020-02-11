const Employee = require('../model/employee');

exports.getAllEmployees = (req, res, next) => {

    res.status(200).json({
        message: "I am sent now just for testing"
    })

};

exports.getEmployeeById = (req, res, next) => {

    res.status(200).json({
        message: "Just one employee is to be sent"
    })

};


exports.addEmployee = (req, res, next) => {

    res.status(200).json({
        message: "Employee is to be added"
    })

};

exports.updateEmployee = (req, res, next) => {

    res.status(200).json({
        message: "Employee is to be updated"
    })

};


exports.deleteEmployee = (req, res, next) => {

    res.status(200).json({
        message: "Employee is to be deleted"
    })

};
