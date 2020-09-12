const Plan = require("../models/plan");



exports.createPlan = (req, res, next) => {
  console.log("*********");
  console.log(req.body);
  console.log("***********");
  Plan.create({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    phone_number: req.body.phone_number,
  })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to create plan!",
        error: err,
      });
    })
    .then((createdPlan) => {
      //console.log(createdPlan);
      console.log("createdPlan");
      res.status(201).json({
        message: "Plan successfully added",
        plan: createdPlan.dataValues,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error 500 during adding post",
        error: err,
      });
    });
};

exports.updatePlan = (req, res, next) => {
  const post_id = req.params.id;
  Plan.update(
    {
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      phone_number: req.body.phone_number,
    },
    {
      where: {
        id: post_id,
      },
    }
  )
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Plan identified by id " + post_id + " successfully updated",
        });
      } else {
        res.status(401).json({ message: "Cant update Plan" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error 500 during updating plan",
        error: err,
      });
    });
};

exports.getPlan = (req, res, next) => {
  Plan.findByPk(req.params.id, { include: ["Gallery"] })
    .then((plan) => {
      if (plan) {
        res.status(200).json({
          message: "Plan successfully fetched ",
          plan: plan,
        });
      } else {
        res.status(404).json({ message: "plan not found " });
      }
    })
    .catch((err) => {
      return res.status(500).json("Error 500 during getting plan");
    });
};

exports.getPlans = (req, res, next) => {
  Plan.findAll()
    .then((plans) => {
      res.status(200).json({
        message: "Plans successfully fetched",
        plans: plans,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error 500 during fetching posts",
        error: err,
      });
    });
};

exports.deletePlan = (req, res, next) => {
  Plan.destroy({
    where: { id: req.params.id },
  })
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Plan successfully deleted" });
      } else {
        res.status(401).json({ message: "Couldn't delete the plan" });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Error 500 during deleting the plan",
        error: err,
      });
    });
};
