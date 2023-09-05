import React, { useState, useRef, useEffect } from "react";
import "./menu.styles.css";
import left from "../../../assets/left.png";
import ProductSlider from "./productSlider";
import rollarData from "./menuDatas/rollarData";
import setlerData from "./menuDatas/setlerData";
import eristelerData from "./menuDatas/eristelerData";
import ickilerData from "./menuDatas/ickilerData";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabRef = useRef(null);
  const handleTabClick = () => {
   const row = document.querySelectorAll(".row");

    row.forEach((row) => {
      row.classList.add("activeTab");
    }
    );

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

  const handleLeftButtonClick = () => {
    setActiveTab((prevTab) => (prevTab === 1 ? 4 : prevTab - 1));

  };

  const handleRightButtonClick = () => {
    setActiveTab((prevTab) => (prevTab === 4 ? 1 : prevTab + 1));
  };

  return (
    <div className="menuSection container">
      <ProductSlider products={getDataForTab()} className="sliderContainer" />
      <div className="menuSliderButtons">
        <div className="menuSliderButtonsLeft" onClick={handleLeftButtonClick}>
          <img src={left} alt="vector" />
        </div>
        <div className="menuSliderButtonsRight" onClick={handleRightButtonClick}>
          <img src={left} alt="vector" />
        </div>
      </div>
      <div className="productWraps rows" onClick={handleTabClick}>
        {inActiveTabName.map((tabName, index) => (
          <div key={Math.random}  className="row">{tabName}</div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
