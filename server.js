// const express = require("express");
// const bodyParser = require("body-parser");
// const connectDB = require("./config/db");

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Connect Database
// connectDB();

// // Routes
// app.get("/", (req, res) => {
//   res.send("Attendance System API Running ✅");
// });

// // Import routes
// app.use("/api/classes", require("./routes/classRoutes"));
// app.use("/api/students", require("./routes/studentRoutes"));
// app.use("/api/attendance", require("./routes/attendanceRoutes"));

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect Database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Attendance System API Running ✅");
});

app.use("/api/classes", require("./routes/classRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

const errorHandler = require("./middleware/errorHandler");

// Routes...
app.use("/api/classes", require("./routes/classRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

// Error Handler (last middleware)
app.use(errorHandler);


const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
