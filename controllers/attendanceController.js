const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, classId, date, status } = req.body;

    // prevent duplicate attendance entry
    const existing = await Attendance.findOne({ studentId, classId, date });
    if (existing) {
      return res.status(400).json({ message: "Attendance already marked for this student on this date." });
    }

    const attendance = new Attendance({ studentId, classId, date, status });
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("studentId", "name rollNo")
      .populate("classId", "name subject teacher");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAttendanceByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const records = await Attendance.find({ date })
      .populate("studentId", "name rollNo")
      .populate("classId", "name subject teacher");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const records = await Attendance.find({ studentId: id })
      .populate("classId", "name subject teacher");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addStudent = async (req, res, next) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    next(err); // instead of res.status(500)...
  }
};
