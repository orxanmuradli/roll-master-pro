import React from "react";
import "./MenuList.css";
import ProductList from "./ProductList";
import rollarData from "./menudata/rollarData"; // Import your rollar data
import ickilerData from "./menudata/ickilerData"; // Import your ickiler data
import setlerData from "./menudata/setlerData"; // Import your setler data
import eristelerData from "./menudata/eristelerData"; // Import your eristeler data
import { useState } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
const App = () => {
  const [activeTab, setActiveTab] = useState("ROLLAR");
  const headers = ["ROLLAR", "İÇKİLƏR", "SETLƏR", "ƏRİŞTƏLƏR & BURGER"];
  const handleTabClick = (header) => {
    setActiveTab(header);
  };

  return (
    
  

     <div className="menu_list_heading">

<BreadCrumbs pathnames={["", "MENYU"]} />


    <div className="container">
  
    
  
      
    

      <div className="menu_title">
        <div className="menu_titleh3">
          <div className="menu_title" style={{ marginBottom: "40px" }}>
            <div>
              <h3 style={{ fontSize: "40px", marginTop: "40px" }}>MENYU</h3>
            </div>
            <div className="menu-download" style={{ padding: 0 }}>
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

              {/* <img src={scor2} alt="" /> */}
            </div>
          </div>
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
    </div>
  );
};

export default App;
