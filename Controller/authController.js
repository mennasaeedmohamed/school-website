const jwt = require("jsonwebtoken");
const StudentSchema = require("./../Model/StudentModel");

exports.login = (request, response, next) => {
  StudentSchema.findOne({
    userName: request.body.userName,
    password: request.body.password,
  })
    .then((object) => {
      if (!object) {
        adminModel.findOne();
        throw new Error("incorrect userName or password");
      }
      //generate token
      // jwt (dataToBeLoaded ,  secretKey , optionsforSettings)
      let token = jwt.sign(
        {
          id: object._id,
          role: "student", // obejct.role
        },
        "gisTrack",
        { expiresIn: "1h" }
      );

      response.status(200).json({ data: "Authenticated", token });
    })
    .catch((error) => next(error));
};
