const Class = require("../models/Class");

exports.addClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
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
