import React from "react";
import "./BloqDetail.css";
import rector from "../../../assets/rector1.png";

import remmos from "../../../assets/Remmos 37 (5).png";
import recmos from "../../../assets/recmos3.png";
import remsort from "../../../assets/remsort4.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const BloqDetail = () => {
  const basliq = {
    title: "Bloq ",
  };
  return (
    <div>
      <BreadCrumbs
        pathnames={[
          "",
          "Bloq",
          "  BLOQ  İlk dəfə yeyənlər üçün dadlı 10 suşi növü",
        ]}
      />
      <div className="bloq-main">
        <div className="test12">
          <h2>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</h2>
          <p>17 May 2023</p>

          <div className="informations1">
            <div className="imform-img">
              <img src={rector} alt="" />
            </div>

            <div className="bloq-spans1">
              <span>
                Lorem ipsum dolor sit amet consectetur. Sagittis sit vulputate
                integer nunc diam adipiscing vestibulum aliquet sagittis. Ac
                nibh risus sollicitudin eleifend vivamus purus semper sapien.
                Aenean volutpat dignissim luctus varius. Non et urna duis
                fringilla eu. Maecenas id odio ut sed orci diam. Curabitur
                convallis et viverra urna est dolor. Urna tortor condimentum mus
                diam quam. Nisi in bibendum amet quis. Faucibus vitae ac neque
                pulvinar purus ipsum ornare. <br /> Vitae sit tempus lacus
                vulputate arcu morbi eget. Vitae integer ac enim at et
                tincidunt. Facilisis nisl mi habitant risus consectetur luctus
                vitae tincidunt. A sed eu tellus libero. Tincidunt volutpat
                mattis nullam amet. Diam euismod pharetra facilisi scelerisque
                sagittis ut odio. Magnis sed morbi sit sapien velit eu tortor
                neque sapien. <br /> Interdum quam aliquet turpis facilisis eget
                arcu sit est donec. Ac dignissim convallis tempus lorem.
                Ultricies id massa in vitae quis sed sagittis maecenas. Eleifend
                nullam mi tincidunt elit diam semper amet amet non. Viverra
                pulvinar nascetur cras est ut maecenas. Sed mi sit lorem egestas
                at.
              </span>
            </div>
          </div>

          <h3 className="bloqh3">OXŞAR MƏQALƏLƏR</h3>

          <div className="bloq_header_main">
            <div className="informations-main">
              <img src={remmos} alt="" />
              <div className="bloq-spans">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
            <div className="informations-main">
              <img src={recmos} alt="" />
              <div className="bloq-spans">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
            <div className="informations-main">
              <img src={remsort} alt="" />
              <div className="bloq-spans">
                <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloqDetail;
