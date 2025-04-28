
// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../Model/Booking');
const { protect } = require('../middleware/authMiddleware');

// Create a booking
router.post('/', protect, async (req, res) => {
  const booking = await Booking.create({ ...req.body, user: req.user._id });
  res.status(201).json(booking);
});

// Get user's bookings
router.post('/mybookings', async (req, res) => {
  const { token, id } = req.body;
  console.log(id);

  if (!token || !id) {
    return res.status(400).json({ message: 'Missing token or user ID' });
  }

  try {
    const Bookings = await Booking.find({ userId: id }).populate('carId');;
     console.log(Bookings);
    
    res.status(200).json(Bookings);
  } catch (err) {
    console.error("Booking fetch error:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


module.exports = router;
