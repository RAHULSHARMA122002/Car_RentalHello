

import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div className='FooterConatiner'>
        <div className="wrapper">
            <div className="firstFoot">
                <div className="Footdisc">
                    <img src="" alt="" />
                    <p></p>
                </div>

                <div className="last">
                    @ CarDekho . ALL right reserved
                </div>


            </div>
            <div className="FootAbout">
                <div> 
                    About Us

                </div>
                <div className='F'> 
                    About Us

                </div>
                <div className='F'> 
                    Blog

                </div>
                <div className='F'> 
                    Career
                </div>

            </div>
            <div className="support">
                <div>
                    Contactus
                </div>
                <div className='F'>
                    Return
                </div>
                <div className='F'>
                    FQA
                </div>

            </div>

            <div className="getUpdate">
                <input type=""  className='inputttt'/>
                <div className="iconss">
                 <FacebookOutlinedIcon/>
                 <InstagramIcon/>
                 <TwitterIcon/>
                 <EmailIcon/>
                </div>
                <span className='F'>Privacy policy</span>
                <span className='F'>Term of Services</span>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
