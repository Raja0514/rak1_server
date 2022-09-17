const model = require("../Models/projectmodel");
const express = require("express");
const router1 = express.Router();

router1.post("/postproject", async (req, res) => {
  console.log("Inside post function");
  const data = new model({
    clientname: req.body.clientname,
    email: req.body.email,
    responsive: req.body.responsive,
    frontend: req.body.frontend,
    backend: req.body.backend,
    database: req.body.database,
  });
  const data1 = await data.save();
  res.json(data1);
});

router1.get("/projects", async (req, res) => {
  try {
    const data2 = await model.find();
    res.json(data2);
  } catch (err) {
    res.send("Error" + err);
  }
});
module.exports = router1;