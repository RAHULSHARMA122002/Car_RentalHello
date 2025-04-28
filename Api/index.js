
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const auth = require('../Routes/authroute');
const userRoute = require('../Routes/userRoute');
const carRoute = require('../Routes/carroute');
const bookingRoute = require('../Routes/BookingRoute');
const reviewRoute = require('../Routes/ReviewRoute');
const adminRoute = require('../Routes/AdminRoute');

const app = express();

app.use(express.json());
app.use(cors());

// Define your routes
app.use('/api/auth', auth);
app.use('/api/user', userRoute);
app.use('/api/cars', carRoute);
app.use('/api/bookings', bookingRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/admin', adminRoute);

// MongoDB connection
mongoose.connect("mongodb+srv://hare_krishna:Neelkanth1@cluster0.oijip3h.mongodb.net/CarRent?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Export the app for Vercel to handle serverless function requests
module.exports = app;
