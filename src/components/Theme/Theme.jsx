import React from "react";

function Theme({ setMode, mode }) {
  function changeTheme() {
    if (+mode === 0) {
      //bnurda da her defe click olanda yoxladim eger 0 disa 1 eledim 1 dise 0 eledim i vse. state olduguna gore bir yerde deyishende her yerde deyishir
      localStorage.setItem("theme", 1);
      document.body.classList.add("dark");
      setMode(1);
    } else {
      localStorage.setItem("theme", 0);
      document.body.classList.remove("dark");
      setMode(0);
    }
  }

  return (
    <div className="darkmood">
      <button
        style={{ border: "none", background: "none" }}
        onClick={changeTheme}
      >
        {+mode === 0 ? (
          <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0611 28.8742C8.27388 28.2064 4.90705 26.0615 2.70128 22.9113C0.495517 19.7611 -0.368511 15.8638 0.299277 12.0766C1.31946 6.29081 5.55788 1.68939 11.0991 0.356992C11.2944 0.309927 11.4993 0.32278 11.6872 0.393877C11.8751 0.464974 12.0372 0.591019 12.1525 0.755586C12.2677 0.920154 12.3307 1.11561 12.3332 1.3165C12.3358 1.51738 12.2778 1.71438 12.1667 1.88181C11.3367 3.13419 10.7182 4.81674 10.3781 6.74573C9.18121 13.5335 13.7298 20.0296 20.5176 21.2264C22.4466 21.5666 24.2392 21.5609 25.6999 21.2092C25.8952 21.1621 26.1002 21.175 26.2881 21.2461C26.476 21.3172 26.6381 21.4432 26.7534 21.6078C26.8686 21.7724 26.9316 21.9678 26.9341 22.1687C26.9367 22.3696 26.8786 22.5666 26.7676 22.734C23.6204 27.4853 17.8468 29.8943 12.0611 28.8742Z"
              fill="#201F22"
            />
          </svg>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9998 23.3332C14.3534 23.3332 14.6926 23.4736 14.9426 23.7237C15.1927 23.9737 15.3332 24.3129 15.3332 24.6665V25.9998C15.3332 26.3535 15.1927 26.6926 14.9426 26.9426C14.6926 27.1927 14.3534 27.3332 13.9998 27.3332C13.6462 27.3332 13.3071 27.1927 13.057 26.9426C12.807 26.6926 12.6665 26.3535 12.6665 25.9998V24.6665C12.6665 24.3129 12.807 23.9737 13.057 23.7237C13.3071 23.4736 13.6462 23.3332 13.9998 23.3332ZM22.4852 20.5998L23.4278 21.5425C23.6707 21.794 23.8051 22.1308 23.8021 22.4804C23.799 22.83 23.6588 23.1644 23.4116 23.4116C23.1644 23.6588 22.83 23.799 22.4804 23.8021C22.1308 23.8051 21.794 23.6707 21.5425 23.4278L20.5998 22.4852C20.3569 22.2337 20.2226 21.8969 20.2256 21.5473C20.2286 21.1977 20.3689 20.8633 20.6161 20.6161C20.8633 20.3689 21.1977 20.2286 21.5473 20.2256C21.8969 20.2226 22.2337 20.357 22.4852 20.5998ZM5.51449 20.5998C5.75444 20.3607 6.0764 20.2219 6.415 20.2115C6.7536 20.2012 7.08344 20.3201 7.33753 20.5442C7.59162 20.7682 7.7509 21.0806 7.78302 21.4178C7.81515 21.755 7.71771 22.0918 7.51049 22.3598L7.39983 22.4852L6.45716 23.4278C6.21722 23.667 5.89525 23.8058 5.55665 23.8161C5.21805 23.8265 4.88821 23.7075 4.63412 23.4835C4.38003 23.2595 4.22075 22.9471 4.18863 22.6099C4.1565 22.2726 4.25394 21.9358 4.46116 21.6678L4.57182 21.5425L5.51449 20.5998ZM13.9998 5.99984C16.1216 5.99984 18.1564 6.84269 19.6567 8.34298C21.157 9.84327 21.9998 11.8781 21.9998 13.9998C21.9998 16.1216 21.157 18.1564 19.6567 19.6567C18.1564 21.157 16.1216 21.9998 13.9998 21.9998C11.8781 21.9998 9.84326 21.157 8.34297 19.6567C6.84268 18.1564 5.99983 16.1216 5.99983 13.9998C5.99983 11.8781 6.84268 9.84327 8.34297 8.34298C9.84326 6.84269 11.8781 5.99984 13.9998 5.99984ZM3.33316 12.6665C3.673 12.6669 3.99987 12.797 4.24698 13.0303C4.4941 13.2636 4.6428 13.5824 4.66272 13.9217C4.68264 14.261 4.57226 14.595 4.35414 14.8556C4.13602 15.1162 3.82662 15.2837 3.48916 15.3238L3.33316 15.3332H1.99983C1.65999 15.3328 1.33312 15.2027 1.086 14.9694C0.838886 14.7361 0.690178 14.4172 0.670262 14.078C0.650346 13.7387 0.760724 13.4047 0.978845 13.1441C1.19697 12.8835 1.50636 12.716 1.84382 12.6758L1.99983 12.6665H3.33316ZM25.9998 12.6665C26.3534 12.6665 26.6926 12.807 26.9426 13.057C27.1927 13.3071 27.3332 13.6462 27.3332 13.9998C27.3332 14.3535 27.1927 14.6926 26.9426 14.9426C26.6926 15.1927 26.3534 15.3332 25.9998 15.3332H24.6665C24.3129 15.3332 23.9737 15.1927 23.7237 14.9426C23.4736 14.6926 23.3332 14.3535 23.3332 13.9998C23.3332 13.6462 23.4736 13.3071 23.7237 13.057C23.9737 12.807 24.3129 12.6665 24.6665 12.6665H25.9998ZM4.57182 4.57184C4.80142 4.34227 5.10688 4.20436 5.43092 4.18399C5.75495 4.16361 6.07529 4.26217 6.33183 4.46117L6.45716 4.57184L7.39983 5.5145C7.63896 5.75445 7.77779 6.07642 7.78813 6.41502C7.79847 6.75361 7.67954 7.08345 7.45549 7.33754C7.23145 7.59163 6.91909 7.75091 6.58186 7.78304C6.24463 7.81516 5.90781 7.71772 5.63982 7.5105L5.51449 7.39984L4.57182 6.45717C4.32186 6.20713 4.18144 5.86806 4.18144 5.5145C4.18144 5.16095 4.32186 4.82187 4.57182 4.57184ZM23.4278 4.57184C23.6778 4.82187 23.8182 5.16095 23.8182 5.5145C23.8182 5.86806 23.6778 6.20713 23.4278 6.45717L22.4852 7.39984C22.3622 7.52718 22.215 7.62876 22.0524 7.69864C21.8897 7.76852 21.7147 7.8053 21.5377 7.80684C21.3607 7.80838 21.1851 7.77464 21.0212 7.7076C20.8574 7.64056 20.7085 7.54155 20.5833 7.41636C20.4581 7.29117 20.3591 7.1423 20.2921 6.97844C20.225 6.81458 20.1913 6.63901 20.1928 6.46197C20.1944 6.28493 20.2311 6.10997 20.301 5.9473C20.3709 5.78463 20.4725 5.6375 20.5998 5.5145L21.5425 4.57184C21.7925 4.32188 22.1316 4.18146 22.4852 4.18146C22.8387 4.18146 23.1778 4.32188 23.4278 4.57184ZM13.9998 0.666504C14.3534 0.666504 14.6926 0.80698 14.9426 1.05703C15.1927 1.30708 15.3332 1.64622 15.3332 1.99984V3.33317C15.3332 3.68679 15.1927 4.02593 14.9426 4.27598C14.6926 4.52603 14.3534 4.6665 13.9998 4.6665C13.6462 4.6665 13.3071 4.52603 13.057 4.27598C12.807 4.02593 12.6665 3.68679 12.6665 3.33317V1.99984C12.6665 1.64622 12.807 1.30708 13.057 1.05703C13.3071 0.80698 13.6462 0.666504 13.9998 0.666504Z"
              fill="#000"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Theme;
