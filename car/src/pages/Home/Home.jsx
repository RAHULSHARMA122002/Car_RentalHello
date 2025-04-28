import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Home.css'
import pho from './Assetees/blackcar.png'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from "react";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

function Home(props) {



  const [carrId,setCarrId] = useState('');
  const [carPrice,setCarPrice] = useState('');

  const token = localStorage.getItem('token');
    var userid =0;
    if(token){
      
      const decode = jwtDecode(token);
       userid = decode.id;
      
    }

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


  const [cars, setCars] = useState([]);
  
  



  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get('https://carrental-738agi02.b4a.run/api/cars');
        setCars(response.data);
        console.log(response.data);
        console.log(props);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }

    fetchCars();
  }, []);

 
 var result=0;
  const calculateTotal = (carPrice) => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    result =  diffDays > 0 ? diffDays * carPrice : 0;
    return result;
  };




  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await axios.post('https://carrental-738agi02.b4a.run/api/bookings/', 
  {
    userId: userid,
    carId: carrId,
    startDate,
    endDate,
    totalPrice: result,
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




  //

  const [isBookNowEnabled, setIsBookNowEnabled] = useState(false);

  const handleBookClick = () => {
    setIsBookNowEnabled(true);
  };

  const handleBookNowClick = () => {
    alert('Book Now clicked!');
  };
 



  ///

  const handelC = (carId,carPrice) => {
    setCarrId(carId);
    setCarPrice(carPrice);
    console.log(carId,carPrice);
  }
  
  ////


  if (props.nums === 1) {
    document.body.style.backgroundColor = 'white';
    console.log("heelo")
  } else {
    document.body.style.backgroundColor = '';
    console.log("nothello")
  }

  return (
    
    <div className='HomeContainer'>
      <div className="HomeWrapper">
  
      
      <div className="centerHome">
  <span className="disccc">RENT A CAR FOR THE DAY</span>
  <form onSubmit={handleSubmit}>
  <div className="centerHomeWrapper">
    
    <div className="centertop">
      <div className="centerItem">
        <label>Departure</label>
        <div className="inputtt">
          <LocationOnIcon className="locat" />
          <input type="text" placeholder="City, airport or station" />
          
        </div>
      </div>

      <div className="centerItem">
        <label>Return Location</label>
        <div className="inputtt">
          <LocationOnIcon className="locat" />
          <input type="text" placeholder="City, airport or station" />
        </div>
      </div>

      <div className="centerItem">
        <label>Pick Up Date & Time</label>
        <div className="inputtt">
          <input type="date" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required/>
          <input type="time" />
        </div>
      </div>

      <div className="centerItem">
        <label>Return Date & Time</label>
        <div className="inputtt">
          <input type="date" value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required/>
          <input type="time" />
        </div>
      </div>

      <div className="centerItem">
      <label>Total Price:
          <input type="text" value={calculateTotal(carPrice)} readOnly  className='textt'/>
        </label>
      </div>
    </div>

    <div className="centerend">
      <button className="search" type="submit"onClick={handleBookNowClick} 
        disabled={!isBookNowEnabled} >BookNow ➔</button>
    </div>
  </div>
    </form>
   

</div>
      
    </div>

    <div className="midcontainerr" style={{if (props) {
      this.backgroundColor="black"
      
    }}}>
      <div className="midwrapperr">
        <div className="discc">
          <h1>Top pick Veheciles this month</h1>
           <p>Experience the epitom of our top pick</p>
        </div>
        <div className="card-container">
      {cars.map((car, index) => (
        <div className="carrr" key={index}>
          <div className="card">
            <div className="badge">{car.brand}</div>
            <img src={car.imageUrls} alt={car.name} className="car-img" />
          </div>
          <div className="contain">
            <h3>{car.name}</h3>
            <p>⚙️ {car.transmission}</p>
            <p>👥 {car.seaters} | 🧳 2 | ⭐ 4</p>
            <p className="price">Start from <strong>${car.pricePerDay}</strong> / day</p>
            <button className='HomeButton'onClick={() => {
    handleBookClick();
    handelC(car._id,car.pricePerDay);
  }}  >Book</button>
          </div>
        </div>
      ))}
    </div>
       

<div className="notend">
  <div className="notenddisc">
    <h1>Discover popular car rantel website</h1>
    <p>Explore the diverse and expensive range of car rantel website </p>
  </div>
  <div className="notenditems">
    <div className="collection">
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    </div>
    <div className="collection">
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    </div>
    <div className="collection">
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    <span>Car Rental in Bandung</span>
    </div>
    
    
    
    
  </div>
  
</div>
<div className="end">
<div className='eee'><h1>Enjoy extra miles with our best deal </h1></div>
<div class="cardd">
  <div class="item1">
    
    <div >
      <DiscountOutlinedIcon/>
      <h3>Experience the Holidays</h3>
      <h1>40% Off</h1>
      <small>Term and condition</small>
    </div>
    <div className="batch">valid only 12 jan - 19 jan 2024</div>
  </div>

  <div class="item1">
   
    <div >
    <DiscountOutlinedIcon/>
      <h3>Online-Only Discounts</h3>
      <h1>65% Off</h1>
      <small>Term and condition</small>
    </div>
    <div className="batch">valid only 12 jan - 19 jan 2024</div>
  </div>
  <div class="item1">
    
    <div >
    <DiscountOutlinedIcon/>
      <h3>Online-Only Discounts</h3>
      <h1>10% Off</h1>
      <small>Term and condition</small>
    </div>
    <div className="batch">valid only 12 jan - 19 jan 2024</div>
  </div>
 

</div>

</div>

<div className='Homegrey'><span>Hellosign</span> <span>Doordash</span> <span>Coinbase</span><span>AirTable</span><span>Pendo</span><span>treeshouse</span></div>
      </div>
      <div className="hero-grid">
      <div className="hero-card dark-card">
        <h2>Explore more to get your comfort zone</h2>
        <p>Book your perfect stay with us.</p>
        <button className="booking-button">Booking Now →</button>
      </div>

      <div className="hero-card herro">
        <h3 >Vehicle Available</h3>
        <h1>3,490</h1>
      </div>
      
     
      
    </div>
    </div>
   
    

    <Footer className="helloF"/>
    </div>
  )
}

export default Home;
