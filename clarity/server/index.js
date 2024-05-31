require('dotenv').config();
const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const mongoUri = process.env.MONGO_URI;
console.log('mongoUri', mongoUri)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => console.error(err));

app.use(cors());
app.use(express.json());

const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./user');

app.use(bodyParser.json());

app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
