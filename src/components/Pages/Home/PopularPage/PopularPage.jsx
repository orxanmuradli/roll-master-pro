import sushi from "../../../../assets/sushi.png";
import noodle from "../../../../assets/noodle.png";
import spring from "../../../../assets/spring.png";
import "./PopularPage.css";
import React from "react";

const PopularPage = () => {
  return (
    <div className="popular">
      <div className="container">
        <div className="popular-tittle">
          <h1>POPULAR</h1>
          <div className="card-main">
            <div className="cards">
              <div className="cart">
                <img src={sushi} alt="" />
                <div className="set">
                  <h2>Nobel Set</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
              </div>
              <div className="cart">
                <img src={noodle} alt="" />
                <div className="set-2">
                  <h2>Seafood Noodle</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
              </div>
              <div className="cart">
                <img src={spring} alt="" />
                <div className="set-3">
                  <h2>Spring Roll Salmon</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
