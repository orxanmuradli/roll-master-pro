import Logo from "../../assets/logo.png";
import LogoDark from "../../assets/dark.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../Pages/SearchBar/SearchBar";
import BookData from "../../data/search-data.json";
import React, { useRef, useState } from "react";

import wolt from "../../assets/wolt.png";

const Header = ({ mode }) => {
  const [search, setSearch] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    document.body.style.overflowY = e.target.checked ? "hidden" : "auto";
    document.body.style.height = e.target.checked ? "100vh" : "auto";
  };
  return (
    <div className="container max-width navs">
      <div
        className="navbar"
        style={{ transform: `translateX(${search ? "0px" : 0})` }}
      >
        <div className="leftSide">
          <img src={+mode ? LogoDark : Logo} alt="logodark" />
        </div>

        <div className="rightSide" id="rightSide">
          {/* <Link to="/"></Link> */}

          <div style={{ display: "flex", gap: "25px" }}>
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

            <ul id="desktop">
              <li>
                {" "}
                <NavLink to="/MENYU">MENYU</NavLink>
              </li>
              <li>
                <NavLink to="/KAMPANİYALAR">KAMPANİYALAR</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/HAQQIMIZDA">HAQQIMIZDA</NavLink>
              </li>
              <li>
                <NavLink to="/BLOQ">BLOQ</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/ƏLAQƏ">ƏLAQƏ</NavLink>
              </li>
            </ul>
          </div>

          <div id="showw">
            <input
              ref={inputRef}
              type="checkbox"
              onChange={handleChange}
              id="menu"
            />
            <label for="menu" className="bars">
              <div className="bar"></div>
            </label>
            <ul id="mobile-menu">
              <div style={{ paddingTop: "25px" }}>
                <li
                  onClick={() => {
                    inputRef.current.click();
                  }}
                >
                  <NavLink to="/MENYU">MENYU</NavLink>
                </li>
                <li
                  onClick={() => {
                    inputRef.current.click();
                  }}
                >
                  <NavLink to="/KAMPANİYALAR">KAMPANİYALAR</NavLink>
                </li>
                <li  onClick={() => {
                    inputRef.current.click();
                  }}>
                  <NavLink to="/HAQQIMIZDA">HAQQIMIZDA</NavLink>
                </li>




                <li  onClick={() => {
                    inputRef.current.click();
                  }}>
                  <NavLink to="/BLOQ">BLOQ</NavLink>
                </li>



                <li  onClick={() => {
                    inputRef.current.click();
                  }}> 

                 <NavLink to="/ƏLAQƏ">ƏLAQƏ</NavLink>
                </li>
              </div>
              {/* <div className="social__icons">
         <SocialMedia />
         </div> */}
              <div className="mobile__menu__footer">
                <a href="#">
                  <svg
                    id="navbarSvg"
                    width="27"
                    height="30"
                    viewBox="0 0 27 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0611 28.8742C8.27388 28.2064 4.90705 26.0615 2.70128 22.9113C0.495517 19.7611 -0.368511 15.8638 0.299277 12.0766C1.31946 6.29081 5.55788 1.68939 11.0991 0.356992C11.2944 0.309927 11.4993 0.32278 11.6872 0.393877C11.8751 0.464974 12.0372 0.591019 12.1525 0.755586C12.2677 0.920154 12.3307 1.11561 12.3332 1.3165C12.3358 1.51738 12.2778 1.71438 12.1667 1.88181C11.3367 3.13419 10.7182 4.81674 10.3781 6.74573C9.18121 13.5335 13.7298 20.0296 20.5176 21.2264C22.4466 21.5666 24.2392 21.5609 25.6999 21.2092C25.8952 21.1621 26.1002 21.175 26.2881 21.2461C26.476 21.3172 26.6381 21.4432 26.7534 21.6078C26.8686 21.7724 26.9316 21.9678 26.9341 22.1687C26.9367 22.3696 26.8786 22.5666 26.7676 22.734C23.6204 27.4853 17.8468 29.8943 12.0611 28.8742Z"
                      fill="#201F22"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0H7C5.14409 0.00198528 3.36477 0.740121 2.05245 2.05245C0.740121 3.36477 0.00198528 5.14409 0 7V19C0.00198528 20.8559 0.740121 22.6352 2.05245 23.9476C3.36477 25.2599 5.14409 25.998 7 26H19C20.8559 25.998 22.6352 25.2599 23.9476 23.9476C25.2599 22.6352 25.998 20.8559 26 19V7C25.998 5.14409 25.2599 3.36477 23.9476 2.05245C22.6352 0.740121 20.8559 0.00198528 19 0ZM13 19C11.8133 19 10.6533 18.6481 9.66658 17.9888C8.67988 17.3295 7.91085 16.3925 7.45672 15.2961C7.0026 14.1997 6.88378 12.9933 7.11529 11.8295C7.3468 10.6656 7.91824 9.59647 8.75736 8.75736C9.59647 7.91824 10.6656 7.3468 11.8295 7.11529C12.9933 6.88378 14.1997 7.0026 15.2961 7.45672C16.3925 7.91085 17.3295 8.67988 17.9888 9.66658C18.6481 10.6533 19 11.8133 19 13C18.9983 14.5908 18.3657 16.116 17.2408 17.2408C16.116 18.3657 14.5908 18.9983 13 19ZM20.5 7C20.2033 7 19.9133 6.91203 19.6666 6.7472C19.42 6.58238 19.2277 6.34811 19.1142 6.07403C19.0007 5.79994 18.9709 5.49834 19.0288 5.20736C19.0867 4.91639 19.2296 4.64912 19.4393 4.43934C19.6491 4.22956 19.9164 4.0867 20.2074 4.02882C20.4983 3.97094 20.7999 4.00065 21.074 4.11418C21.3481 4.22771 21.5824 4.41997 21.7472 4.66664C21.912 4.91332 22 5.20333 22 5.5C22 5.89782 21.842 6.27936 21.5607 6.56066C21.2794 6.84196 20.8978 7 20.5 7ZM17 13C17 13.7911 16.7654 14.5645 16.3259 15.2223C15.8864 15.8801 15.2616 16.3928 14.5307 16.6955C13.7998 16.9983 12.9956 17.0775 12.2196 16.9231C11.4437 16.7688 10.731 16.3878 10.1716 15.8284C9.61216 15.269 9.2312 14.5563 9.07686 13.7804C8.92252 13.0044 9.00173 12.2002 9.30448 11.4693C9.60723 10.7384 10.1199 10.1136 10.7777 9.67412C11.4355 9.2346 12.2089 9 13 9C14.0609 9 15.0783 9.42143 15.8284 10.1716C16.5786 10.9217 17 11.9391 17 13Z"
                      fill="#201F22"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.3332 14C27.3332 6.63996 21.3598 0.666626 13.9998 0.666626C6.63984 0.666626 0.666504 6.63996 0.666504 14C0.666504 20.4533 5.25317 25.8266 11.3332 27.0666V18H8.6665V14H11.3332V10.6666C11.3332 8.09329 13.4265 5.99996 15.9998 5.99996H19.3332V9.99996H16.6665C15.9332 9.99996 15.3332 10.6 15.3332 11.3333V14H19.3332V18H15.3332V27.2666C22.0665 26.6 27.3332 20.92 27.3332 14Z"
                      fill="#201F22"
                    />
                  </svg>
                </a>

                <a
                  className="wolt"
                  href="https://wolt.com/en/aze/baku/restaurant/rollmaster"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="footer-bottom-up-el_div_icon">
                    <img src={wolt} alt="" />
                  </div>
                </a>
              </div>
            </ul>
          </div>
          <SearchBar
            mode={mode}
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
