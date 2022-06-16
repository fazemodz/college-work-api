const express = require('express')
const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  })
})
router.use('/orders-endpoint', require('./routes/orders.js'))

module.exports = router
