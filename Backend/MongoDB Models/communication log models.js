// src/models/communicationLog.js
const mongoose = require('mongoose');

const communicationLogSchema = new mongoose.Schema({
    customerId: mongoose.Schema.Types.ObjectId,
    message: String,
    status: { type: String, default: 'SENT' },
});

module.exports = mongoose.model('CommunicationLog', communicationLogSchema);
