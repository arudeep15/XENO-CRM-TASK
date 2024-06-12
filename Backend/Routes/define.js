// src/routes/index.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const orderController = require('../controllers/orderController');
const campaignController = require('../controllers/campaignController');

router.post('/customers', customerController.addCustomer);
router.get('/customers', customerController.getCustomers);
router.post('/orders', orderController.addOrder);
router.post('/campaign', campaignController.createCampaign);
router.get('/campaign/logs', campaignController.getCampaignLogs);

module.exports = router;
