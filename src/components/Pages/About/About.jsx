import React from 'react'
import aboimg  from  "../../../assets/aboimg.png";
import "./About.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const About = () => {
  return (
    <div className='about-heading'>
         <BreadCrumbs pathnames={["","HAQQIMIZDA"]} />
    <div className="container">
    <h2>HAQQIMIZDA</h2>
    <div className='about-tittle'>
      <h1>Lorem ipsum dolor sit amet consectetur. Ac ante in sed varius vitae.<span className='red'>At habitasse.</span> </h1>
    </div>
    <div className='about-img'>
    <img src={aboimg } alt="" />
    </div>
     <div className='about-lorem'>
      <span>Lorem ipsum dolor sit amet consectetur. Mattis et donec nibh feugiat porta eget ut. Adipiscing malesuada eget nibh nulla lacus. Ante congue lacus dui pharetra amet velit viverra proin. Vitae dui adipiscing amet eget felis consectetur pellentesque sed. Viverra sed urna scelerisque posuere. Ac ipsum vehicula integer sit sit placerat ac. Sed in facilisi proin nascetur eget.</span>
     </div>


        
    </div>
    </div>
  )
}

export default About
