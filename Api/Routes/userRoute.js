// Routes/userRoute.js
const express = require('express');
const Router = express.Router();
const User = require('../Model/User');

// POST route to get user data by ID
Router.post('/getuser', async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id).select('name email role');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = Router;
