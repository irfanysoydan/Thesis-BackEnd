const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElectionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    parties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "parties",
        required: [true, "Parties are required"],
      },
    ],
    image: {
      type: String,
    },
    isFinished: {
      type: Boolean,
      required: false,
      default: false,
    },
    winner: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const Election = mongoose.model("elections", ElectionSchema);

module.exports = Election;
