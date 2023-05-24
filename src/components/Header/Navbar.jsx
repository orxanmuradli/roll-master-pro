import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import './Navbar.css'
import search from "../../assets/search.png";
import React from "react";


const Header = () => {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo}  />
      </div>
      <div className='rightSide'>
   
     <Link to="/"></Link>
     <img src={search} alt="" />
     <Link to="/MENYU">MENYU</Link>
     <Link to="/KAMPANİYALAR">KAMPANİYALAR</Link>
     <Link to="/HAQQIMIZDA">HAQQIMIZDA</Link>
     <Link to="/BLOQ">BLOQ</Link>
     <Link to="/ƏLAQƏ">ƏLAQƏ</Link>
      </div>
    </div>
  )
}

export default Header
