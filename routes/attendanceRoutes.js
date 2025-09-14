const express = require("express");
const router = express.Router();
const {
  markAttendance,
  getAllAttendance,
  getAttendanceByDate,
  getStudentAttendance
} = require("../controllers/attendanceController");

router.post("/", markAttendance);
router.get("/", getAllAttendance);
router.get("/:date", getAttendanceByDate);
router.get("/student/:id", getStudentAttendance);

module.exports = router;
