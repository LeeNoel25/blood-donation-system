const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const donorSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bloodType: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  // lastDonationDate: { type: Date },
});

const Donor = model("Donor", donorSchema);
module.exports = Donor;
