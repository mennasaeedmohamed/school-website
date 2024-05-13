const mongoose = require("mongoose");

// A-  create object from mongoose schema
const schema = new mongoose.Schema({
  _id: Number,
  //   name: String,
  name: { type: String, unique: true },
});

// B- Mapping

module.exports = mongoose.model("departments", schema);
