const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    manlenght: 3,
    maxlength: 200,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    minlenght: 12,
    manlenght: 100,
  },
  password: { type: String, require, trim: true, minlenght: 8, maxlength: 500 },
});

const userModule = mongoose.model("user", userSchema);

module.exports = userModule;
