import React from "react";

import "./MenuList.css";
import menu1 from "../../../assets/menu1.png";
import menu2 from "../../../assets/menu2.png";
import menu3 from "../../../assets/menu3.png";
import menu4 from "../../../assets/menu4.png";
import menu5 from "../../../assets/menu5.png";
import menu6 from "../../../assets/menu6.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import rollmaster from "../../Pages/MenuList/rollmaster";
import {slideUp} from "../MenuList/rollmaster";

const MenuList = () => {

  




  return (
    <div className=".menu__page">
      <BreadCrumbs pathnames={["", "MENYU"]} />
      <div className="special-trigger">
        <div className="container">
          <div className="menu_title">
            <div className="menu_titleh3">
              <h3>MENYU</h3>
            </div>
            <div className="menu-download">
              <span>Menyunu yüklə</span>
              <div>
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 15.5V20.1667C22.5 20.7855 22.2542 21.379 21.8166 21.8166C21.379 22.2542 20.7855 22.5 20.1667 22.5H3.83333C3.21449 22.5 2.621 22.2542 2.18342 21.8166C1.74583 21.379 1.5 20.7855 1.5 20.1667V15.5M6.16667 9.66667L12 15.5M12 15.5L17.8333 9.66667M12 15.5V1.5"
                    stroke="#BDBDC8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="special-bar-trigger">
            <div className="left-container-trigger">
              <div className="Rollar-trigger">
                <div className="Rolrigger1" >
                  <p>ROLLAR</p> 
                </div>
              

               

                <div className="Rolrigger2">
                  
                  <p>SETLƏR</p>
                </div>
                <div className="Rolrigger3">
                  <p>ƏRİŞTƏLƏR & BURGER</p>
                </div>

                <div className="Rolrigger4">
                  <p>İÇKİLƏR VƏ ƏLAVƏLƏR</p>
                </div>
              </div>

              <div className="special-trigger-cards">
                <div className="trigger-card">
                 <img src={menu1} alt="" />
                  <div className="slsnlsk">
                    <h2>California Salmon</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu2} alt="" />
                  <div className="slsnlsk">
                    <h2>Oasis Roll</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu3} alt="" />
                  <div className="slsnlsk">
                    <h2>Philadelphia Classic</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu4} alt="" />
                  <div className="slsnlsk">
                    <h2>Unagi Classic</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu5} alt="" />
                  <div className="slsnlsk">
                    <h2>Tuna Classic</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu6} alt="" />
                  <div className="slsnlsk">
                    <h2>Mango Fusion</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu1} alt="" />
                  <div className="slsnlsk">
                    <h2>California Salmon</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu2} alt="" />
                  <div className="slsnlsk">
                    <h2>Oasis Roll</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
                <div className="trigger-card">
                  <img src={menu3} alt="" />
                  <div className="slsnlsk">
                    <h2>Philadelphia Classic</h2>
                    <p>DÜYÜ, NORİ, XİYAR </p>
                    <span>32 AZN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
