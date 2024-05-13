const { query, param, body } = require("express-validator");

exports.addStudentValidator = [
  // data is mandatory by default
  body("id").isInt().withMessage(" student id should be number"),
  body("userName").isString().withMessage("student name should be string"),
];

exports.updateStudent = [];
exports.checkId = [];
