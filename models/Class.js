const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  name: String,
  subject: String,
  teacher: String
});

module.exports = mongoose.model("Class", classSchema);
