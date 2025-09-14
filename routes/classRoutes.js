const express = require("express");
const router = express.Router();
const { addClass, getClasses } = require("../controllers/classController");

router.post("/", addClass);
router.get("/", getClasses);

module.exports = router;
