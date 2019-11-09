const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true, min: 8},
  created: Date,
  modified: Date
});

const User = mongoose.model("User", userSchema);

module.exports = User;
