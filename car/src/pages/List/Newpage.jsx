import React from "react";
import { motion } from "framer-motion";
import './NewPage.css'
import carImage1 from "../Home/Assetees/back.jpg";
import carImage2 from "../Home/Assetees/red.png";
import HoverButton from "../../components/Navbar/Button/Button"
import Star from "../Home/Assetees/star.png"
import { useNavigate } from "react-router-dom";


const NewPage = () => {
  const navigate = useNavigate();
  
  

  return (
    <motion.div
      className="new-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
     <div className="bottomm">
                 
                 <div className="card1">
                   <div className="top"><span className="topSpan">CAR RENTAL
                    
                    </span></div>
                   <div className="first"><HoverButton initialText="LUXARY" hoverText="$50/day"/></div>
                   <div className="first"><HoverButton initialText="MEDIUM" hoverText="$28/day"/></div>
                   <div className="first">
                   <HoverButton initialText="LOWER" hoverText="$15/day"/>
                    </div>
                   
                     
                 </div>
                   
                 <div className="card">
                  
                    <img src={carImage1} alt="" className="imggg"/>
                    <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
                   
             <div className="bottom">
             <button className='one'onClick={ () => {
    
    navigate('/Next', { state: { img: carImage1 } });
  
  }}>
                  one Seater
               </button>
             </div></div>
                 <div className="card"> 
                   
                   <img src={carImage2} alt="" className='imggg' />
                   <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
             <div className="bottom">
             
             <button className='one'onClick={ () => {
    
    navigate('/Next', { state: { img: carImage2 } });
  
  }}>
                  one Seater
               </button>
             </div></div>
                 <div className="card"> 
                
                   <img src={carImage1} alt="" className='imggg' />
                   <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
             
             <div className="bottom">
               <button className='one'>
                  one Seater
               </button>
              
             </div></div>
             <div className="card">
                  
                  <img src={carImage1} alt="" className='imggg' />
                  <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
           
           <div className="bottom">
           <button className='one'>
                one Seater
             </button>
           </div></div>
             
             
                 
     
             </div>


             <div className="bottomm">
                 
                
                     
                 
                   
                 <div className="card">
                  
                    <img src={carImage1} alt="" className='imggg' />
                    <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />
                    </div>
                    </div>
             <div className="bottom">
             <button className='one'>
                  one Seater
               </button>
             </div></div>
                 <div className="card"> 
                   
                   <img src={carImage1} alt="" className='imggg' />
                   <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
             
             <div className="bottom">
             <button className='one'>
                  one Seater
               </button>
             </div></div>
                 <div className="card"> 
                
                   <img src={carImage1} alt="" className='imggg' />
                   <div className="dis">
                      <div className="disMain">
                        <span className="nam">SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
             
             <div className="bottom">
               <button className='one'>
                  one Seater
               </button>
              
             </div></div>
             <div className="card">
                  
                  <img src={carImage1} alt="" className='imggg' />
                  <div className="dis">
                      <div className="disMain">
                        <span>SUV</span><br/>
                        <span>4 Seater</span><br/>
                        <span>comfortable</span><br/>
                        <span>Air Conditioner</span>
                      </div>
                    <div className="starContainer"><img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt=""  className="Star"/>
                         <img src={Star} alt="" className="Star"/>
                         <img src={Star} alt=""className="Star" />
                         <img src={Star} alt=""className="Star" />

                    </div>
                    </div>
           
           <div className="bottom">
           <button className='one'>
                one Seater
             </button>
           </div></div>
             
             
                 
     
             </div>

    </motion.div>
  );
};

export default NewPage;
