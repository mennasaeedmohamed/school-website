const StudentSchema = require("./../Model/StudentModel");

exports.getAllStudents = (request, response, next) => {
  StudentSchema.find()
    .populate({ path: "department", select: { name: 1 } }) // path:property name inside student
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getOneStudent = (request, response, next) => {
  StudentSchema.findOne({ _id: request.params.id })
    .populate({ path: "department", select: { name: 1 } })
    .then((object) => {
      if (!object) {
        throw new Error("Student not Exists");
      }

      response.status(200).json({ object });
    })
    .catch((error) => {
      next(error);
    });
};

exports.addStudent = (request, response, next) => {
  const object = new StudentSchema(request.body);
  object
    .save()
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateStudent = (request, response, next) => {
  console.log(request.body);

  response.status(200).json({ data: "student Update" });
};

exports.deleteStudent = (request, response, next) => {
  response.status(200).json({ data: "student Deleet" });
};
