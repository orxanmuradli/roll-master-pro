import React, { useState, useRef, useEffect } from "react";
import "./menu.styles.css";
import vector from "../../../assets/vector.png";
import scor from "../../../assets/scor.png";
import left from "../../../assets/left.png";
import gsap from "gsap";
import ProductSlider from "./productSlider";
import rollarData from "./menuDatas/rollarData";
import setlerData from "./menuDatas/setlerData";
import eristelerData from "./menuDatas/eristelerData";
import ickilerData from "./menuDatas/ickilerData";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabRef = useRef(null); // Create a ref for the active tab element

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getDataForTab = () => {
    switch (activeTab) {
      case 1:
        return rollarData;
      case 2:
        return setlerData;
      case 3:
        return eristelerData;
      case 4:
        return ickilerData;
      default:
        return [];
    }
  };

  const inActiveTabName = ["rollar", "setler", "eristeler", "ickiler"];
// wraps z-index if 3, container is 2
//
  return (
    <div className="menuSection container">
      <ProductSlider products={getDataForTab()} className="sliderContainer"/>
      <div className="menuSliderButtons">
        <div
          className="menuSliderButtonsLeft"
          onClick={() => {
            setActiveTab(activeTab - 1);
            if (activeTab === 1) {
              setActiveTab(4);
            }
          }}
        >
          <img src={left} alt="vector"/>
        </div>
        <div
          className="menuSliderButtonsRight"
          onClick={() => {
            setActiveTab(activeTab + 1);
            if (activeTab === 4) {
              setActiveTab(1);
            }
          }}
        >
          <img src={left} alt="vector" />
        </div>
      </div>
      <div className="productWraps rows">
        {inActiveTabName.map((tabName, index) => (
          <div key={index} class="row">{tabName}</div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
