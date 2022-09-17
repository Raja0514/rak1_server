const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  clientname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  responsive: {
    type: String,
    require: true,
  },
  frontend: {
    type: String,
    require: true,
  },
  backend: {
    type: String,
    require: true,
  },
  database: {
    type: String,
    require: true,
  },
});
const model = mongoose.model("Postproject", blogSchema);

module.exports = model;
