const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },

    elections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "parties",
      },
    ],
  },
  { timestamps: true }
);

const Party = mongoose.model("parties", PartySchema);

module.exports = Party;
