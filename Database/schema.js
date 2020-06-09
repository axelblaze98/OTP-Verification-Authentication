const mongoose = require("mongoose");
const { mongo } = require("../config.js");
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = {
  username: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
};

var user = mongoose.model("user", userSchema);

module.exports = user;
