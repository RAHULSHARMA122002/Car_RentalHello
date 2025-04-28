import React from 'react'
import './mainCar.css'
import imm from '../Home/Assetees/blackcar.png'
import m1 from '../Home/Assetees/wheel.jpg';
import m2 from '../Home/Assetees/Location.jpg'
import m3 from '../Home/Assetees/scold.jpg'
import m4 from '../Home/Assetees/Safty.jpg'
import m5 from '../Home/Assetees/fuel.jpg'
import m6 from '../Home/Assetees/Ac.jpg'
import m7 from '../Home/Assetees/Seat.jpg'
import m8 from '../Home/Assetees/Speed.jpg'
import Star from '../Home/Assetees/star.png'
import m9 from '../Home/Assetees/interior.jpg'
import m10 from '../Home/Assetees/fog.jpg'
import m11 from '../Home/Assetees/car.jpg'
import { useLocation } from 'react-router-dom';



function MainCar(){
  const location = useLocation();
  const imgg = location?.state?.img;
  console.log('Location:', location);       // ✅ log it to check
  console.log('Image:', imgg);               // ✅ should be the URL of the image

  return (
    <div className='Container'>
      <div className='Wrapper'>
        <div className="carComp">
          <img src={m9} alt="" className='m4'/>
          <img src={m10} alt=""className='m4'/>
          <img src={m11} alt=""className='m4'/>

        </div>
         <div className="card3">
                     
                       {imgg?<img src={imgg}alt="Received" className='mainimg' /> : <p>No image received</p>}
                
                <div className="bottom">
                <button className='one'>
                     one Seater
                  </button>
                </div></div>

                <div className="card2">
          <div className="cardContainer">
            <div className="diss">
              <span className='nam'>Haval H2</span>
              <br/>
              <br/>
              <span>Rating</span>
              <br/>
              <br/>
              <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                                       <img src={Star} alt=""  className="Star"/>
                                       <img src={Star} alt="" className="Star"/>
                                       <img src={Star} alt=""className="Star" />
                                       <img src={Star} alt=""className="Star" />
              
                                  </div>

            </div>
            <div className="containe1">
            <img src={m3} alt=""  className='m3'/>
            <span>hello</span>
    <img src={m2} alt=""  className='m3'/>
    <span>hello</span>
    <img src={m1} alt=""  className='m3'/>
    <span>hello</span>
    <img src={m4} alt=""  className='m3'/>
    <span>hello</span>
    <img src={m5} alt=""  className='m3'/>
    <span>hello</span>
    <img src={m6} alt=""  className='m3'/>
    <span>hello</span>
    <img src={m7} alt=""  className='m3'/>
    <span>hello</span>
    <img src={m8} alt=""  className='m3'/>
    <span>hello</span>

            </div>
          

          </div>

    

                       
                
                </div>
      </div>
    </div>
  )
}


export default MainCar;