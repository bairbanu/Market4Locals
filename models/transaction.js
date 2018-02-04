const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  buyer_id: ObjectId,
  item_id: ObjectId,
  seller_id: ObjectId,
  driver_id: ObjectId
});

const ModelClass = mongoose.model("transaction", transactionSchema);

module.exports = ModelClass;