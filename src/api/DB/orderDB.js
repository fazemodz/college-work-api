const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  OrderUUID: String,
  CustomerName: String,
  Distance: String,
  TotalPrice: String,
});
module.exports = mongoose.model("OrderDB", OrderSchema);
