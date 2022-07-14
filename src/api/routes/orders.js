const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const OrderDB = require("../DB/orderDB");
const { v4: uuidv4 } = require("uuid");
router.get("/Get-All-Orders", (req, res) => {
  OrderDB.find()
    .exec()
    .then((orderinfo) => {
      res.json(orderinfo);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/Add-New-Order", (req, res) => {
    const NewOrder = new OrderDB({
        OrderUUID: uuidv4(),
        CustomerName: req.body.CustomerName,
        Distance: req.body.Distance,
        TotalPrice: req.body.TotalPrice,
    });
    NewOrder.save().then((orderinfo) => {
        res.json(orderinfo);
    })
    .catch((err) => {
        res.json(err);
    })

});
router.delete("/Delete-order-by-id/:ID", (req, res)=>{
  OrderDB.findByIdAndDelete(req.params.ID).exec().then((orderinfo)=>{
    res.json(orderinfo);
  }).catch((err)=>{
    res.json(err);
  });
});
router.get("/Delete-order-by-id", (req, res)=>{
  res.json({
    message: "Test"
  });
});
module.exports = router;