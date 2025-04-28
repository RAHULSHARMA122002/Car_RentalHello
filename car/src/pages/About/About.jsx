import React from 'react';
import './About.css';
import car1 from '../About/car1.jpg';
import car2 from '../About/car2.jpg';



function About(props) {

  if (props.num === 1) {
    document.body.style.backgroundColor = 'black';
    console.log("heelo")
  } else {
    document.body.style.backgroundColor = '';
    console.log("nothello")
  }

  return (
    <div className="aboutContainer">

<div className="car-showcase">
  <div className="top-cards">
    <img src={car1} alt="Car 1" className="car-card12" />
    <img src={car1} alt="Car 2" className="car-card12" />
    <img src={car2}alt="Car 3" className="car-card12" />
  </div>
  <div className="main-car">
    <img src={car1} alt="Main Car" />
  </div>
</div>
      <div className="aboutHeader">
        <h1>About Us</h1>
        <p>Your trusted partner in car rentals</p>
      </div>

      <div className="aboutContent">
        <div className="aboutSection">
          <h2>Our Mission</h2>
          <p>
            At our company, we aim to make car rental easy, affordable, and accessible.
            Whether you're traveling for business or pleasure, we provide a wide range of cars to
            suit every need and budget.
          </p>
        </div>

        <div className="aboutSection">
          <h2>What We Offer</h2>
          <ul>
            <li>Wide selection of cars for rent</li>
            <li>List your own car and earn money</li>
            <li>24/7 customer support</li>
            <li>Safe, reliable, and insured vehicles</li>
            <li>Easy booking and transparent pricing</li>
          </ul>
        </div>

        <div className="aboutSection">
          <h2>Why Choose Us?</h2>
          <p>
            With years of experience and a passion for convenience, we make renting a car hassle-free.
            Our platform connects car owners and renters on one easy-to-use interface.
          </p>
        </div>

        <div className="aboutCTA">
          <h3>Ready to hit the road?</h3>
          <button>Browse Cars</button>
        </div>
      </div>
      
    </div>
  );
}

export default About;
