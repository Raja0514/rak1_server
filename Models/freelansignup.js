const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  freelancername: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const model = mongoose.model("Signupfreelan", blogSchema);

module.exports = model;
