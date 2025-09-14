const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["Present", "Absent"] }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
