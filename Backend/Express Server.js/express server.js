// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mini-crm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
