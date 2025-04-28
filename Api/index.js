const express = require("express")

require('dotenv').config();
const app = express();
const auth = require('./Routes/authroute');
const { default: mongoose } = require("mongoose");

const cors = require("cors")
app.use(express.json());
app.use(cors());




app.use('/api/auth', auth);
app.use('/api/user', require('./Routes/userRoute'));
app.use('/api/cars', require('./Routes/carroute'));
app.use('/api/bookings', require('./Routes/BookingRoute'));
app.use('/api/reviews', require('./Routes/ReviewRoute'));
app.use('/api/admin', require('./Routes/AdminRoute'));

// MongoDB connect + start server

mongoose.connect("mongodb+srv://hare_krishna:Neelkanth1@cluster0.oijip3h.mongodb.net/CarRent?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('Connected to MongoDB!'))
.catch((err) => console.error('MongoDB connection error:', err));



app.listen(5000,()=>{
    console.log("hello backend");
})