const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  url: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
