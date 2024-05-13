const jwt = require("jsonwebtoken");
/*********** authenitication  search token */
module.exports = (request, repsonse, next) => {
  try {
    let token = request.get("authorization").split(" ")[1];
    let decodedToken = jwt.verify(token, "gisTrack");
    request.token = decodedToken;
    next();
  } catch (error) {
    // console.log(error);
    let errorObject = new Error("not authenicated");
    errorObject.status = 401;
    next(errorObject);
  }
};

module.exports.isAdmin = (request, response, next) => {
  if (request.token.role == "admin") next();
  else {
    let errorObject = new Error("not Authorized");
    errorObject.status = 403;
    next(errorObject);
  }
};

module.exports.isStudent = (request, response, next) => {
  if (request.token.role == "student") next();
  else {
    let errorObject = new Error("not Authorized");
    errorObject.status = 403;
    next(errorObject);
  }
};

module.exports.isAdminOrstudent = (request, response, next) => {
  if (request.token.role == "admin" || request.token.role == "student") next();
  else {
    let errorObject = new Error("not Authorized");
    errorObject.status = 403;
    next(errorObject);
  }
};
