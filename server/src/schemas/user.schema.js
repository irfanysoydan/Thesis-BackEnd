const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    idNumber: {
      type: Number,
      required: [true, "ID Number is required"],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    birthYear: {
      type: Number,
      required: [true, "Birth Year is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
