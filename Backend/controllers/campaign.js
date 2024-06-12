// src/controllers/campaignController.js
const CommunicationLog = require('../models/communicationLog');
const Customer = require('../models/customer');

// Mock Vendor API
const sendCampaign = async (message, customerId) => {
    // Simulating sending message and getting a delivery status
    return new Promise((resolve) => {
        setTimeout(() => {
            const status = Math.random() < 0.9 ? 'SENT' : 'FAILED';
            resolve({ status, customerId });
        }, 1000);
    });
};

exports.createCampaign = async (req, res) => {
    const { criteria, message } = req.body;

    try {
        let query = {};

        if (criteria.totalSpends) query.totalSpends = { $gt: criteria.totalSpends };
        if (criteria.visits) query.visits = criteria.visits;
        if (criteria.lastVisit) query.lastVisit = { $lt: new Date(Date.now() - criteria.lastVisit) };

        const customers = await Customer.find(query);

        const logEntries = await Promise.all(customers.map(async (customer) => {
            const response = await sendCampaign(message.replace('{name}', customer.name), customer._id);
            return new CommunicationLog({
                customerId: response.customerId,
                message,
                status: response.status,
            }).save();
        }));

        res.status(201).json(logEntries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCampaignLogs = async (req, res) => {
    try {
        const logs = await CommunicationLog.find().sort({ _id: -1 });
        res.status(200).json(logs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
