const express = require("express");
const router = express.Router();
const plansController = require("../controllers/plans");
var multer  = require('multer');
var upload = multer() ;


router.post("",upload.array(), plansController.createPlan);

router.put("/:id", plansController.updatePlan);

// get single post
router.get("/:id", plansController.getPlan);

// get all posts
router.get("getAllPlans", plansController.getPlans);

router.delete("/:id", plansController.deletePlan);



module.exports = router;
