import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../Pages/SearchBar/SearchBar";
import BookData from "../../data/search-data.json";
import React, { useState } from "react";
import SocialMedia from "../Footer/Socialmedia";

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="container navs">
      <div
        className="navbar"
        style={{ transform: `translateX(${search ? "0px" : 0})` }}
      >
        <div className="leftSide">
          <img src={Logo} />
        </div>
  
        <div className="rightSide" id="rightSide">
          <Link to="/"></Link>

    

          <div style={{ display: "flex",gap: "34.8px",  }}>
            <div className="set-search">
                  
            <svg 
              onClick={() => setSearch(true)}
              className=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4287 21.5714L18.2345 16.375C19.7919 14.3455 20.519 11.7996 20.2683 9.25375C20.0176 6.70788 18.8079 4.35269 16.8846 2.66593C14.9613 0.979169 12.4684 0.0871541 9.91158 0.170833C7.35477 0.254511 4.92552 1.30762 3.11661 3.11652C1.30771 4.92543 0.254603 7.35468 0.170924 9.91149C0.0872456 12.4683 0.979261 14.9612 2.66602 16.8845C4.35278 18.8078 6.70797 20.0175 9.25384 20.2682C11.7997 20.5189 14.3456 19.7918 16.3751 18.2344L21.5737 23.4341C21.6958 23.5562 21.8407 23.653 22.0002 23.7191C22.1597 23.7851 22.3307 23.8192 22.5034 23.8192C22.676 23.8192 22.847 23.7851 23.0065 23.7191C23.166 23.653 23.311 23.5562 23.4331 23.4341C23.5552 23.312 23.652 23.167 23.7181 23.0075C23.7841 22.848 23.8182 22.677 23.8182 22.5044C23.8182 22.3317 23.7841 22.1608 23.7181 22.0012C23.652 21.8417 23.5552 21.6968 23.4331 21.5747L23.4287 21.5714ZM2.81259 10.25C2.81259 8.779 3.2488 7.34104 4.06604 6.11795C4.88328 4.89486 6.04486 3.94158 7.40389 3.37865C8.76291 2.81572 10.2583 2.66843 11.7011 2.95541C13.1438 3.24239 14.469 3.95074 15.5092 4.9909C16.5494 6.03105 17.2577 7.35629 17.5447 8.79902C17.8317 10.2418 17.6844 11.7372 17.1214 13.0962C16.5585 14.4552 15.6052 15.6168 14.3821 16.4341C13.1591 17.2513 11.7211 17.6875 10.2501 17.6875C8.27817 17.6855 6.38759 16.9012 4.99323 15.5069C3.59886 14.1125 2.81462 12.2219 2.81259 10.25Z"
                fill="#201F22"
              />
            </svg>
            
            
            
            
            </div>
 
          
      
         <ul id='desktop'>
          <li>  <Link to="/MENYU">MENYU</Link></li>
            <li><Link to="/KAMPANİYALAR">KAMPANİYALAR</Link></li>
          <li>  <Link to="/HAQQIMIZDA">HAQQIMIZDA</Link></li>
          <li><Link to="/BLOQ">BLOQ</Link></li>
           <li> <Link to="/ƏLAQƏ">ƏLAQƏ</Link></li>
         </ul>
        
 </div>

      <div id="showw">
      <input type="checkbox" id="menu" />
    <label for="menu" class="bars">
      <div class="bar"></div>
    </label>
         <ul id="mobile-menu" >
          
              <li>
                <Link href="#">MENYU</Link>
              </li>
              <li>
                <Link href="#">KAMPANİYALAR</Link>
              </li>
              <li>
                <Link href="#">HAQQIMIZDA</Link>
              </li>
              <li>
                <Link href="#">BLOQ</Link>
              </li>
              <li>
                <Link href="#">ƏLAQƏ</Link>
              </li>
              {/* <div className="social__icons">
         <SocialMedia />
         </div> */}
         </ul>
       
          </div>
          <SearchBar
            className={search ? "active" : ""}
            setSearch={setSearch}
            placoholder="Axtarış et"
            data={BookData}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
