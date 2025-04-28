// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../Model/Review');
const { protect } = require('../middleware/authMiddleware');

// Add review
router.post('/', protect, async (req, res) => {
  const review = await Review.create({ ...req.body, user: req.user._id });
  res.status(201).json(review);
});

// Get reviews for a car
router.get('/car/:carId', async (req, res) => {
  const reviews = await Review.find({ car: req.params.carId });
  res.json(reviews);
});

module.exports = router;
