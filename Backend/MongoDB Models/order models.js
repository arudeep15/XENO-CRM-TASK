// src/models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: mongoose.Schema.Types.ObjectId,
    orderAmount: Number,
    orderDate: Date,
});

module.exports = mongoose.model('Order', orderSchema);
