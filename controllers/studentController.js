const Student = require("../models/Student");

exports.addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("classId", "name subject teacher");
    res.json(students);
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
