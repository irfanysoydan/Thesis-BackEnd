const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    image: {
      type: String,
    },
    person: {
      type: String,
      require: [true, "Person is required"],
    },
    result: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Party = mongoose.model("parties", PartySchema);

module.exports = Party;
