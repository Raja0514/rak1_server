
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
    password: {
      type: String,
      require: true,
    },
    
    
  });
  const model = mongoose.model("Signupclient", blogSchema);

  module.exports = model;

