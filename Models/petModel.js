const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});

const petModel = mongoose.model("Pets", petSchema);
module.exports = petModel;
