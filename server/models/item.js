const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  img_url: String,
  description: String,
  price: String,
  isBought: Boolean,
  isDelivered: Boolean,
  inDelivery: Boolean
});

const ModelClass = mongoose.model("item", itemSchema);

module.exports = ModelClass;