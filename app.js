const express = require("express");
const mongoose = require("mongoose"); // ODM
const studentRoute = require("./Routes/StudentRoute");
const departmentRoute = require("./Routes/DepartmentRoute");
const authenticationRoute = require("./Routes/authRoute");
const authenticationMW = require("./MiddleWare/authenticationMW");
//-------------------------------------------------------------------
const server = express(); // default function to create server
const port = process.env.PORT || 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/GISdb") // connection string
  .then(() => {
    console.log("DB connected ...");
    server.listen(port, () => {
      console.log("I am listening....................", port);
    });
  })
  .catch((error) => console.log("error in DB" + error));

//-------------------------------------------------------------------

// write first Middleware
server.use((request, response, next) => {
  console.log(request.url, request.method);
  next();
});

// ---------------------------------------
server.use(express.json());
// server.use(express.urlencoded());

//Routes(EndPoints)
server.use(authenticationRoute);

//authentication  search for token
server.use(authenticationMW);

server.use(studentRoute);
server.use(departmentRoute);

// ---------------------------------------

//not found
server.use((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

//error MW
server.use((error, request, response, next) => {
  response
    .status(error.status || 500)
    .json({ message: "something went wrong.." + error });
});
