import React from "react";
import "./Company.css";
import campaigns from "../../../assets/campaigns.png";
import Rectangle from "../../../assets/Rectangle 46 (7).png";
import rectan from "../../../assets/rectan.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
const Company = () => {
  return (
    <div className="company-heading">
      <BreadCrumbs pathnames={["", "KAMPANYALAR"]} />
      <div className="container">
        <h2>KAMPANİYALAR</h2>
        <div className="company-header">
          <div className="company-menu">
            <div className="img-contains">
              <img src={campaigns} alt="" />
            </div>
            <div className="company-menu-span">
              <h1>Promokodla 20% endirim</h1>

              <span>
                Aksiya saytdan sifariş zamanı çatdırılma xidməti üçün keçərlidir
              </span>
            </div>
          </div>
          <div className="company-menu">
            <div className="img-contains">
              <img src={Rectangle} alt="" />
            </div>

            <div className="company-menu-span">
              <h1>Promokodla 20% endirim</h1>

              <span>
                Aksiya saytdan sifariş zamanı çatdırılma xidməti üçün keçərlidir
              </span>
            </div>
          </div>
          <div className="company-menu">
            <div className="img-contains-img3">
              <img src={rectan} alt="" />
            </div>
            <div className="company-menu-span">
              <h1>Promokodla 20% endirim</h1>

              <span>
                Aksiya saytdan sifariş zamanı çatdırılma xidməti üçün keçərlidir
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
