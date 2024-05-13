const DepartmentSchema = require("./../Model/departmentModel");

exports.getAllDepartments = (request, response, next) => {
  DepartmentSchema.find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.addDepartment = (request, response, next) => {
  const object = new DepartmentSchema(request.body);

  object
    .save()
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => next(error));
};
