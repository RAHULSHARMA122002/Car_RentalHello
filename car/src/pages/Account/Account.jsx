import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './Account.css';
import { useNavigate } from 'react-router-dom';
import Person from './Assesst/person.png'
import Backgroundimg from './Assesst/backgroundd.jpg'


export default function Account(props) {

  const [userName, setUserName] = useState('');
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      // Fetch user data
      axios.post('http://localhost:5000/api/user/getuser', { id: userId })
        .then(res => {
          setUserName(res.data.name);
          console.log("Fetched user:", res.data);
          console.log(props);
        })
        .catch(err => console.error("Failed to fetch user:", err));

      // Fetch user's bookings
      
      

axios.post('http://localhost:5000/api/bookings/mybookings', {
  token,
  id: userId  // assuming you already fetched user from /getuser
})
.then(res => {
  setBookings(res.data);
  console.log("Fetched bookings:", res.data);
  console.log(props);
})
.catch(err => {
  console.error("Failed to fetch bookings:", err);
});
    }
  }, []);
  const navigate = useNavigate();
  if (props.num === 1) {
    document.body.style.backgroundColor = 'black';
    console.log("heelo")
  } else {
    document.body.style.backgroundColor = '';
    console.log("nothello")
  }
  return (
    <div>
      <div className="ProfileContainer">
      <div className="profieBackphoto">
    <img src={Backgroundimg} alt="back" />
    <div className="profilePhoto">
      <img src={Person} alt="profile" />
      <div className="name">
        <span className="user">{userName}</span>
      </div>
      <button
        className="btn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  </div>

        <div className="mainprofilecontainer">
          <div className="wrapperprofile">
          <h2>Your Bookings</h2>
            <div className="card">
      {Array.isArray(bookings) && bookings.map((booking) => (
        <div key={booking._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
        <img src={booking.carId?.imageUrls} alt="car" className='ProfileCar' />
          <h3>Car: {booking.carId?.brand} {booking.carId?.model} ({booking.carId?.year})</h3>
          <p><strong>Location:</strong> {booking.carId?.location}</p>
          <p><strong>Description:</strong> {booking.carId?.description}</p>
          <p><strong>Price Per Day:</strong> ${booking.carId?.pricePerDay}</p>
          <p><strong>Seats:</strong> {booking.carId?.seats}</p>
          <p><strong>Fuel Type:</strong> {booking.carId?.fuelType}</p>
          <p><strong>Transmission:</strong> {booking.carId?.transmission}</p>
          <p><strong>Rental Period:</strong> {new Date(booking.startDate).toLocaleDateString()} to {new Date(booking.endDate).toLocaleDateString()}</p>
          <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
          <p><strong>Status:</strong> {booking.status}</p>
        </div>
      ))}
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
}
