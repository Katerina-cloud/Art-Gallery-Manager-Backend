const { Schema } = require("mongoose");
const { model } = require("mongoose");

const userSchema = new Schema({
  id: {
    type: Number,
    required: [true, "A user must have an id"],
    unique: true
  },
  name: {
    type: String,
    required: [true, "A user must have a name"]
  },

  email: {
    type: String,
    required: [true, "A user must have an email"]
  },

  login: {
    type: String,
    required: [true, "A user must have a login"]
  },

  password: {
    type: String,
    required: [true, "A user must have a password"]
  }
});

const User = model("User", userSchema);

module.exports = User;