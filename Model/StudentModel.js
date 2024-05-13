const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: Number,
  userName: String,
  password: String,
  department: { type: Number, ref: "departments" },
  // role:{enum:["leader","student"]}
});

module.exports = mongoose.model("students", schema);
