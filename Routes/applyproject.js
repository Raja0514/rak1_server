const model = require("../Models/applyproject");
const express = require("express");
const router3 = express.Router();

router3.post("/applyproject", async (req, res) => {
  console.log("Inside post function");
  const data = new model({
    freelancername: req.body.freelancername,
    email: req.body.email,
    experience: req.body.experience,
  });
  const data1 = await data.save();
  res.json(data1);
});

router3.get("/getallfreelancer", async (req, res) => {
  try {
    const data2 = await model.find();
    res.json(data2);
  } catch (err) {
    res.send("Error" + err);
  }
});


module.exports = router3;
