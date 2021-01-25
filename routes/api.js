const express = require("express");
const router = express.Router();

const apiCtrl = require("../controllers/api");

router.get("/", apiCtrl.getAll);
router.get("/variables", apiCtrl.getColumnsNames);
router.get("/:variable", apiCtrl.getVariableData);

module.exports = router;
