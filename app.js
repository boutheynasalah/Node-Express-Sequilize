const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');

const app = express();

//use routes

const Category = require("./models/category");
const Plan = require("./models/plan");
const Image = require("./models/image");
const plansRoute = require("./routes/plans");
const categoriesRoute = require("./routes/categories");

//routes

// mta3 bb 7atithom homa bidhom ama fehom zeyed
// 5ater ena 9asemt mech 5edma kol fi fichier we7ed
// par exemple controller yest7a9  mysql, middleware yest7a9 passport w jwt...
/*const mysql = require("mysql");
var logger = require("morgan");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const jwt = require("jsonwebtoken");
const UserRoutes = require("./routes/Userroute");
var cors = require("cors");*/

//sequelize
const db = require("./config/sequelize");
db.authenticate()
  .then(() => {
    console.log("Connection established with DB mysql");
  })
  .catch((err) => {
    console.log("unable to connect to DB");
  });





//bodyParser : form & json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//grant access to images folder
//app.use("/images", express.static(path.join("backend/images")));




//set headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Get, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//logger
//app.use(logger("dev"));

// handle errors
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  //res.status(404).send('not found')
  else res.status(500).json({ message: "verfier vos données" });
});

app.use("/plans", plansRoute);
app.use("/categories", categoriesRoute);


module.exports = app;