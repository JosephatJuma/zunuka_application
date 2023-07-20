const mongoose = require("mongoose");
const Trip = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  location: { type: String },
  status: { type: String },
  color: { type: String },
  label: { type: String },
  priority: { type: Number },
});

module.exports = mongoose.model("trip", Trip);
