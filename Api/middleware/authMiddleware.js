const jwt = require('jsonwebtoken');
const User = require('../Model/User');
const Car = require('../Model/car');
const Booking = require('../Model/Booking');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      return res.status(401).json({ msg: "Invalid or expired token" });
    }
  } else {
    return res.status(401).json({ msg: "No token provided" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ msg: "Access denied: Admins only" });
  }
};

const adminOrOwner = async (req, res, next) => {
  if (req.user.role === 'admin') return next();

  const { id } = req.params;

  try {
    // Try to find a car or booking to compare ownership
    const car = await Car.findById(id);
    const booking = await Booking.findById(id);

    if (
      (car && car.owner.toString() === req.user._id.toString()) ||
      (booking && booking.user.toString() === req.user._id.toString())
    ) {
      return next();
    }

    return res.status(403).json({ msg: "Access denied: Not authorized" });
  } catch (err) {
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { protect, adminOnly, adminOrOwner };
