import React from "react";
import "./MenuList.css";
import ProductList from "./ProductList";
import rollarData from "./menudata/rollarData"; // Import your rollar data
import ickilerData from "./menudata/ickilerData"; // Import your ickiler data
import setlerData from "./menudata/setlerData"; // Import your setler data
import eristelerData from "./menudata/eristelerData"; // Import your eristeler data
import { useState } from "react";




const App = () => {

  const [activeTab, setActiveTab] = useState("ROLLAR");
  const headers = ["ROLLAR", "İÇKİLƏR", "SETLƏR", "ƏRİŞTƏLƏR & BURGER"];
  const handleTabClick = (header) => {
    setActiveTab(header);
  };
  

 
  return (
    <div className="container">
      <div className="menu_title">
        <div className="menu_titleh3">
          <h1>Menu</h1>
          <div className="Rollar-trigger">
            {headers.map((header) => (
              <div
                key={header}
                className={`Rolrigger ${activeTab === header ? "activeH" : ""}`}
                onClick={() => handleTabClick(header)}
              >
                <p>{header}</p>
              </div>
            ))}
          </div>
          <div className="productsComponent"></div>
          {activeTab === "ROLLAR" && <ProductList products={rollarData} />}
          {activeTab === "İÇKİLƏR" && <ProductList products={ickilerData} />}
          {activeTab === "SETLƏR" && <ProductList products={setlerData} />}
          {activeTab === "ƏRİŞTƏLƏR & BURGER" && (
            <ProductList products={eristelerData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
