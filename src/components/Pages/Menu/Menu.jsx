import "./Menu.css";
import menu1 from "../../../assets/menu1.png";
import menu2 from "../../../assets/menu2.png";
import menu3 from "../../../assets/menu3.png";
import menu4 from "../../../assets/menu4.png";
import menu5 from "../../../assets/menu5.png";
import menu6 from "../../../assets/menu6.png";
import vector from "../../../assets/vector.png";
import scor from "../../../assets/scor.png";
import left from "../../../assets/left.png";
// import scor2 from "../../../assets/scor2.png";
import React from "react";

const Menu = () => {
  return (
    <div className="special">
      <div className="special-tittle">
        <div className="container">
          <div className="menu_title">
            <div>
              <h3>MENYU</h3>
            </div>
            <div className="menu-download">
              
              <span>Menyunu yüklə</span>
<div>
   <svg
                width="24"
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
           

              {/* <img src={scor2} alt="" /> */}
            </div>
          </div>

          <div className="special-bar">
            {/* <div className="specials"> */}
            {/* <p>ROLLAR</p> */}
            {/* <div className="leftscor">
            <img src={left} alt="" /> </div>
            
          </div> */}
            <div className="left-container">
              <div className="Rollar">
                <p>ROLLAR</p>
              </div>

              <div className="scor scor-left">
                <img src={left} alt="" />
              </div>
              <div className="scor scor-right">
                <img src={scor} alt="" />
              </div>
              <div className="special-cards">
                <div className="cart">
                  <img src={menu1} alt="" />
                  <h2>California Salmon</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
                <div className="cart">
                  <img src={menu2} alt="" />
                  <h2>Oasis Roll</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
                <div className="cart">
                  <img src={menu3} alt="" />
                  <h2>Philadelphia Classic</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
                <div className="cart">
                  <img src={menu4} alt="" />
                  <h2>Unagi Classic</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
                <div className="cart">
                  <img src={menu5} alt="" />
                  <h2>Tuna Classic</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
                <div className="cart">
                  <img src={menu6} alt="" />
                  <h2>Mango Fusion</h2>
                  <p>DÜYÜ, NORİ, XİYAR </p>
                  <span>32 AZN</span>
                </div>
              </div>
            </div>
            <div className="cart-container">
              
              <div className="wrapper-cart">
                <h2>SETLƏR</h2>
                <img src={vector} alt="" />
              </div>

              <div className="wrapper-cart">
                <h1>ƏRİŞTƏLƏR & BURGER</h1>
                <img src={vector} alt="" />
              </div>

              <div className="wrapper-cart">
                <h1>İÇKİLƏR VƏ ƏLAVƏLƏR</h1>
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
