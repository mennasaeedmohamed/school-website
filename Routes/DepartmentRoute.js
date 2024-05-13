const express = require("express");
const controller = require("./../Controller/DepartmentController");
const { isAdmin } = require("./../MiddleWare/authenticationMW");
const router = express.Router();

router
  .route("/departments")
  .all(isAdmin)
  .get(controller.getAllDepartments)
  .post(controller.addDepartment);

module.exports = router;
