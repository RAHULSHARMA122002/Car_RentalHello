import React from 'react';
import './card.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.model}</h3>
      <p>Seats: {car.seats}</p>
      <p>Price/Day: ₹{car.pricePerDay}</p>
      <p>Location: {car.location}</p>
      <button className="book-btn">Book Now</button>
    </div>
  );
};

export default CarCard;
