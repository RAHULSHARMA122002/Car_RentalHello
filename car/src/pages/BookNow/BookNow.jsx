import React, { useState } from 'react';
import './BookNow.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export default function BookNow() {
  const token = localStorage.getItem('token');
  var userid =0;
  if(token){
    
    const decode = jwtDecode(token);
     userid = decode.id;
    
  }
  
  const location = useLocation();
  const { image, carr, price,ownerid,carid } = location.state || {};
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  console.log("car id",carid);

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays * price : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await axios.post(
        'http://localhost:5000/api/bookings/',
        { userId:userid,
          carId:carid,
          startDate,
          endDate,
          totalPrice: calculateTotal(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ attach JWT here
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Booking successful!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert('Booking failed!');
    }
  };

  return (
    <div className='booking'>
      <div className='card12'>
        <img src={image} alt="Selected Car" className="imggg" />
      </div>

      <form onSubmit={handleSubmit} className='register-container'>

        <label>Car Name:
          <input type="text" value={carr} readOnly />
        </label>

        <label>Starting Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>

        <label>Ending Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>

        <label>Total Price:
          <input type="text" value={calculateTotal()} readOnly />
        </label>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
