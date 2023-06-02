import "./Home.css";
import React from "react";
import PopularPage from "./PopularPage/PopularPage";
import Menu from "../Menu/Menu";
import Blog from "../Blog/Blog";

import SocialMedia from "../../Footer/Socialmedia";
function Home() {
  return (
    <section className="banner">
      <div className="container">
        <div className="home">
          <div className="headerContainer">
            <h1>
              Lorem ipsum dolor sit amet consectetur. Egestas quis suscipit leo
              elementum amet.
            </h1>
            {/* <div className="kecid">
            <button> MENYUYA KEÇİD ET </button>

            <div>
              {" "}
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z"
                  fill="white"
                />
              </svg>
            </div>
          </div> */}
            <div className="header_link">
              <a className="link_rectangle" href="#">
                MENYUYA KEÇİD ET
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6668 16L11.8002 14.0667L16.5335 9.33333H0.333496V6.66667H16.5335L11.8002 1.93333L13.6668 0L21.6668 8L13.6668 16Z"
                    fill="white"
                  />
                </svg>
              </a>
              {/* <img className="arrow-icons" src={arrow} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="social">
          <div className="left">
            <div className="lefting1">
              {" "}
              <p>10:00 - 23:00</p>
            </div>
            <div className="righting2">
              {" "}
              <span>+994 50 736 56 16</span>
            </div>
          </div>

          <div className="right">
            <SocialMedia />
          </div>
        </div>
      </div>
      <section className="heading">
        <div className="container">
          <h1>
            Lorem ipsum <span className="red">dolor sit amet</span> consectetur.
            Egestas quis suscipit leo elementum amet.
          </h1>
        </div>
      </section>
      <PopularPage />
      <Menu />
      <Blog />
    </section>
  );
}

export default Home;
