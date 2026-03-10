const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/orderdb')
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err));

app.use('/order', orderRoutes);

module.exports = app;
