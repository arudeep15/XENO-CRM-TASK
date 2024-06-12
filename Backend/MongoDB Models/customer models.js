// src/models/customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    totalSpends: Number,
    visits: Number,
    lastVisit: Date,
});

module.exports = mongoose.model('Customer', customerSchema);
