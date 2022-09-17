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


module.exports = router3;
