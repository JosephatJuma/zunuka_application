const mongoose = require("mongoose");
const Register = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  verified: { type: Boolean, default: false },
  date_joined: { type: Date, default: new Date() },
  password: { type: String },
});

module.exports = mongoose.model("user", Register);
