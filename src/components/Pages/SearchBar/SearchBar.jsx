import React, { useState } from "react";
import "./SearchBar.css";

import Logo from "../../../assets/logo.png";

function SearchBar({ placoholder, data, className, setSearch }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordeEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className={`search ${className}`}>
      <img src={Logo} />
      <div className="searchinputs">
        <input
          type="text"
          placeholder={placoholder}
          value={wordeEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <div className="icons">
            <svg
              className=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4287 21.5714L18.2345 16.375C19.7919 14.3455 20.519 11.7996 20.2683 9.25375C20.0176 6.70788 18.8079 4.35269 16.8846 2.66593C14.9613 0.979169 12.4684 0.0871541 9.91158 0.170833C7.35477 0.254511 4.92552 1.30762 3.11661 3.11652C1.30771 4.92543 0.254603 7.35468 0.170924 9.91149C0.0872456 12.4683 0.979261 14.9612 2.66602 16.8845C4.35278 18.8078 6.70797 20.0175 9.25384 20.2682C11.7997 20.5189 14.3456 19.7918 16.3751 18.2344L21.5737 23.4341C21.6958 23.5562 21.8407 23.653 22.0002 23.7191C22.1597 23.7851 22.3307 23.8192 22.5034 23.8192C22.676 23.8192 22.847 23.7851 23.0065 23.7191C23.166 23.653 23.311 23.5562 23.4331 23.4341C23.5552 23.312 23.652 23.167 23.7181 23.0075C23.7841 22.848 23.8182 22.677 23.8182 22.5044C23.8182 22.3317 23.7841 22.1608 23.7181 22.0012C23.652 21.8417 23.5552 21.6968 23.4331 21.5747L23.4287 21.5714ZM2.81259 10.25C2.81259 8.779 3.2488 7.34104 4.06604 6.11795C4.88328 4.89486 6.04486 3.94158 7.40389 3.37865C8.76291 2.81572 10.2583 2.66843 11.7011 2.95541C13.1438 3.24239 14.469 3.95074 15.5092 4.9909C16.5494 6.03105 17.2577 7.35629 17.5447 8.79902C17.8317 10.2418 17.6844 11.7372 17.1214 13.0962C16.5585 14.4552 15.6052 15.6168 14.3821 16.4341C13.1591 17.2513 11.7211 17.6875 10.2501 17.6875C8.27817 17.6855 6.38759 16.9012 4.99323 15.5069C3.59886 14.1125 2.81462 12.2219 2.81259 10.25Z"
                fill="#201F22"
              />
            </svg>

            <svg
              onClick={() => setSearch(false)}
              id="clearBtn"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.348 2.72977C19.9216 2.15615 19.9216 1.22615 19.348 0.652548C18.7744 0.0789255 17.8445 0.0789255 17.2709 0.652548L19.348 2.72977ZM0.652863 17.2703C0.0792541 17.8439 0.0792541 18.7739 0.652863 19.3476C1.22649 19.9212 2.1565 19.9212 2.73011 19.3476L0.652863 17.2703ZM17.2709 19.3474C17.8445 19.921 18.7744 19.921 19.348 19.3474C19.9216 18.7737 19.9216 17.8439 19.348 17.2703L17.2709 19.3474ZM2.73011 0.652431C2.1565 0.0788283 1.22649 0.0788283 0.652863 0.652431C0.0792541 1.22605 0.0792541 2.15605 0.652863 2.72965L2.73011 0.652431ZM17.2709 0.652548L0.652863 17.2703L2.73011 19.3476L19.348 2.72977L17.2709 0.652548ZM19.348 17.2703L2.73011 0.652431L0.652863 2.72965L17.2709 19.3474L19.348 17.2703Z"
                fill="#BDBDC8"
              />
            </svg>
          </div>
        </div>
      </div>
      {filteredData.length !== 0 && (
        // <div className="Result"></div>
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                {value.title} <p />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
