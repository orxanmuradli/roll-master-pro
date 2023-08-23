import React from "react";
import "./Bloq.css";
import rector from "../../../assets/rector1.png";
import restor from "../../../assets/restor2.png";
import remmos  from  "../../../assets/Remmos 37 (5).png";
import recmos  from "../../../assets/recmos3.png";
import remsort  from "../../../assets/remsort4.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Bloq = () => {
  return (
    <div className=" bloq-heading">
          <BreadCrumbs pathnames={["","BLOQ"]} />

      <div className="container">
        <h2>BLOQ</h2>
        <div className="bloq-header">
          <div className="informations">
            <img src={rector} alt="" />
            <div className="bloq-spans">
            <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
            </div>
          </div>
          <div className="informations">
            <img src={restor} alt="" />
            <div className="bloq-spans">
            <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
            </div>
          </div>
          <div className="informations">
            <img src={remmos} alt="" />
            <div className="bloq-spans">
            <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
            </div>
          </div>
          <div className="informations">
            <img src={recmos} alt="" />
            <div className="bloq-spans">
            <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
            </div>
          </div>
          <div className="informations">
            <img src={remsort} alt="" />
            <div className="bloq-spans">
            <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloq;
