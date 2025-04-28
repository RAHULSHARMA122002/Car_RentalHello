// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../Model/User');
const Car = require('../Model/car');
const Booking = require('../Model/Booking');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Get all users
router.get('/users', protect, adminOnly, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete a user
router.delete('/users/:id', protect, adminOnly, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: 'User deleted' });
});

module.exports = router;
