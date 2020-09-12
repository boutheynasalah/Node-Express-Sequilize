const express = require("express");
const router = express.Router();
const plansController = require("../controllers/plans");
const categoriesController = require("../controllers/categories")
var multer  = require('multer');
var upload = multer() ;

// get all categories
router.get("", categoriesController.getCategories);

module.exports = router;
