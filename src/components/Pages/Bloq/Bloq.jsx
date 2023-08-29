import React from "react";
import "./Bloq.css";
import rector from "../../../assets/rector1.png";
import restor from "../../../assets/restor2.png";
import remmos from "../../../assets/Remmos 37 (5).png";
import recmos from "../../../assets/recmos3.png";
import remsort from "../../../assets/remsort4.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Bloq = () => {
  return (
    <div className=" bloq-heading">
      <BreadCrumbs pathnames={["", "BLOQ"]} />

      <div className="container-Bloqsss">
        <h2>BLOQ</h2>
        <div className="bloq_header">
          <div className="main_information_img">
            <div className="main_informations">
              <img src={rector} alt="" />
              <div className="bloq_span">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>

            <div className="main_informations">
              <img src={restor} alt="" />
              <div className="bloq_span">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
            <div className="main_informations">
              <img src={remmos} alt="" />
              <div className="bloq_span">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
          </div>
          <div className="informationstwo">
            <div className="main_informations">
              <img src={recmos} alt="" />
              <div className="bloq_span">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
            <div className="main_informations">
              <img src={remsort} alt="" />
              <div className="bloq_span">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloq;
