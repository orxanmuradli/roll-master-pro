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
import scor2 from "../../../assets/scor2.png";
import React from "react";

const Menu = () => {
  return (
    <div className="special">
      <div className="special-tittle">
        <div className="menu_title">
          <div>
            <h3>MENYU</h3>
          </div>
          <div className="menu-download">
            <span>Menyunu yüklə</span>
            <img src={scor2} alt="" />
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
  );
};

export default Menu;
