// routes/carRoutes.js
const express = require('express');
const router = express.Router();
const Car = require('../Model/car');
const { protect, adminOrOwner } = require('../middleware/authMiddleware');

// Add a car
router.post('/', protect, async (req, res) => {
  const car = await Car.create({ ...req.body, owner: req.user._id });
  res.status(201).json(car);
});

// Get all cars
router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// Get a single car
router.get('/:id', async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
});

// Edit a car
router.put('/:id', protect, adminOrOwner, async (req, res) => {
  const updated = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete a car
router.delete('/:id', protect, adminOrOwner, async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted successfully" });
});

module.exports = router;
