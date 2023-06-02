import insta from '../../assets/insta.png';
import face from '../../assets/face.png';
import './Footer.css'
import React from 'react';
import SocialMedia from "../Footer/Socialmedia";



const Footer = () => {
  return (
    <div className="footer-content">
     <div className="container">
     <div className="footer-top">
       <div className="left-content">
       <a
     
        href="https://www.instagram.com/roll_master_azerbaijan/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="">
          <img src={insta} alt="" />
        </div>
      </a>


      <a
        
        href="https://www.facebook.com/people/Roll-Master/100092686596932/?mibextid=LQQJ4d"
        target="_blank"
        rel="noreferrer"
      >
        <div className="">
          <img src={face} alt="" />
        </div>
      </a>
{/* 
       <img src={insta} alt="" />
       <img src={face} alt="" /> */}
       </div>
       <div className='right-content'>
            <h1>MENYU</h1>
            <h1>KAMPANİYALAR</h1>
            <h1>HAQQIMIZDA</h1>
            <h1>BLOQ</h1>
            <h1>ƏLAQƏ</h1>
            </div>

            </div>
            <div className="footer-bottom">
        <div className="left-content">
            <span>ROLL MASTER © 2023 BÜTÜN HÜQUQLAR QORUNUR</span>
            </div>
            <div className='right-content'>

              
          <p>Created by </p> <span className='green'>Claradix</span>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
