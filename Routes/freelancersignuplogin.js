const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const model = require("../Models/freelansignup");
const express = require("express");
const router2 = express.Router();

//clientsignup

router2.post("/freelansignup", async (req, res) => {
  try {
    let existinguser = await model.findOne({ email: req.body.email });
    if (existinguser) {
      return res.status(400).json("user already exist in DB");
    }
    let hash = await bcrypt.hash(req.body.password, 10);
    const data2 = new model({
      freelancername: req.body.freelancername,
      email: req.body.email,
      password: hash,
    });
    const data3 = await data2.save();
    res.json(data3);
  } catch (err) {
    res.status(400).json(err);
  }
});

//clientsignin

router2.post("/freelanlogin", async (req, res) => {
  try {
    const userpassword = await model.findOne({ email: req.body.email });
    if (!userpassword) {
      return res.status(400).json("Email not exist in DB");
    }

    const validpassword = await bcrypt.compare(
      req.body.password,
      userpassword.password
    );

    if (!validpassword) {
      return res.status(400).json("Password not valid");
    }

    const webtoken = await jwt.sign({ email: userpassword.email }, "Rakhan"); //secret key ,its like a ID card

    res.header("auth", webtoken).send(webtoken);
  } catch (err) {
    res.status(400).json(err);
  }
});

const validateuser = (req, res, next) => {
  var token = req.header("auth");
  req.token = token;
  next();
};

router2.get("/get", validateuser, async (req, res) => {
  jwt.verify(req.token, "Rakhan", async (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const data2 = await model.find().select(["-password"]);
      res.json(data2);
    }
  });
});
module.exports = router2;
