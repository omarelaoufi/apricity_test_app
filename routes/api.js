const express = require("express");
const router = express.Router();

const apiCtrl = require("../controllers/api");

router.get("/", apiCtrl.getAll);

module.exports = router;
