import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

function BreadCrumbs({ pathnames }) {
  return (
    <>
      <div className="first_text_of_breadcrumb">
        <div className="container1">
          {pathnames &&
            pathnames.map((path, index) =>
              path === "" ? (
                <>
                  <Link to={"/"}>ƏSAS SƏHİFƏ</Link>
                </>
              ) : index === pathnames.length - 1 ? (
                <div className="last_text_of_breadrcrumb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                      fill="#BDBDC8"
                    />
                  </svg>
                  <div></div>
                  <span>{path}</span>
                </div>
              ) : (
                <div className="pathname_of_breadcrumb">
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5303 5.5303C13.8232 5.2374 13.8232 4.7626 13.5303 4.4697L9.5303 0.469668C9.2374 0.176777 8.7626 0.176777 8.4697 0.469668C8.1768 0.762558 8.1768 1.23744 8.4697 1.53033L11.1893 4.25H1C0.58579 4.25 0.25 4.5858 0.25 5C0.25 5.4142 0.58579 5.75 1 5.75H11.1893L8.4697 8.4697C8.1768 8.7626 8.1768 9.2374 8.4697 9.5303C8.7626 9.8232 9.2374 9.8232 9.5303 9.5303L13.5303 5.5303Z"
                      fill="#8D9195"
                    />
                  </svg>
                  <Link to={`/${path}`}>{path}</Link>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
}

export default BreadCrumbs;
