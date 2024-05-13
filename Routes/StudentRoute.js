const express = require("express");
const controller = require("./../Controller/StudentController");
const {
  addStudentValidator,
  updateStudent,
} = require("./../MiddleWare/Validations/StudentValidators");
const validator = require("./../MiddleWare/Validations/validator");
const router = express.Router();

router
  .route("/students")
  .get(isAdmin, controller.getAllStudents)
  .post(isAdmin, controller.addStudent)
  .patch(isStudent, controller.updateStudent);

router
  .route("/students/:id")
  .get(controller.getOneStudent)
  .delete(controller.deleteStudent);

module.exports = router;
