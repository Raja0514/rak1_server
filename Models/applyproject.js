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
  experience: {
    type: Number,
    require: true,
  },
});
const model = mongoose.model("Applyproject", blogSchema);

module.exports = model;
