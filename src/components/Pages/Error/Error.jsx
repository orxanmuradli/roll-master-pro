import React from "react";
import classes from "./Error.module.css";
import { Link } from "react-router-dom";
// import ErrorImg from "../../../assets/images/404.png";
import error from "../../../assets/error.png";

function Error() {
  return (
    <section className={classes["errorPage"]}>
      <div className={classes["container_of_error"]}>
        {/* <img src={ErrorImg} alt="" /> */}
        <div className={classes["texts_of_errorPage"]}>
          <h2>Page is not found</h2>

          <div>
            {/* <Link to={"/"}> */}
            {/* <button className={classes["errorBtn"]}> */}
            <div className={classes["arrow_to_right"]}>
              <img src={error} alt="" />
              {/* <svg
                    width="14"
                    // height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9999 3.4L2.1249 12.3C1.9249 12.5 1.68724 12.6 1.4119 12.6C1.13724 12.6 0.899902 12.5 0.699902 12.3C0.499902 12.1 0.399902 11.8623 0.399902 11.587C0.399902 11.3123 0.499902 11.075 0.699902 10.875L9.5999 2H1.9999C1.71657 2 1.4789 1.90433 1.2869 1.713C1.09557 1.521 0.999902 1.28333 0.999902 1C0.999902 0.716667 1.09557 0.479 1.2869 0.287C1.4789 0.0956668 1.71657 0 1.9999 0H11.9999C12.2832 0 12.5206 0.0956668 12.7119 0.287C12.9039 0.479 12.9999 0.716667 12.9999 1V11C12.9999 11.2833 12.9039 11.5207 12.7119 11.712C12.5206 11.904 12.2832 12 11.9999 12C11.7166 12 11.4792 11.904 11.2879 11.712C11.0959 11.5207 10.9999 11.2833 10.9999 11V3.4Z"
                      fill="#171B22"
                    />
                  </svg> */}
            </div>
            {/* </button> */}
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className={classes["backbutton"]}>
        <div className={classes["backbuttonspan"]}>
          <span>Geri</span>
        </div>
        <div className={classes["backbuttonsvg"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.6673 24L16.8007 22.0667L21.534 17.3333H5.33398V14.6667H21.534L16.8007 9.93333L18.6673 8L26.6673 16L18.6673 24Z"
              fill="#201F22"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Error;
