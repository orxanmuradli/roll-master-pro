import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import CommitedImages from "../Commited/commitedImg";
const texts = [
  "  Kampaniya 17-23 Iyul tarixlərində Woltdan edilən sifarişlər üçün  keçərlidir.",
  "  Kampaniya 17-23 Iyul tarixlərində Woltdan edilən sifarişlər üçün  keçərlidir.",
  "  Kampaniya 17-23 Iyul tarixlərində Woltdan edilən sifarişlər üçün  keçərlidir.",
];

const Commited = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    intervalRef.current = interval;

    return () => clearInterval(interval);
  }, []);

  const intervalRef = useRef(null);

  const changeText = (e) => {
    e.stopPropagation();
    clearInterval(intervalRef.current);
    setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    setTimeout(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 5000);
      intervalRef.current = interval;
    }, 3000);
  };

  return (
    <section>
    <div className={styles["commited_section"]}>
      <div
        className={styles["slider_container"]}
        
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <div className={styles["left_side"]}>
          <p
            onClick={changeText}
            className={activeIndex === 0 ? styles["heading"] : ""}
          >
            <div className={styles["slidesvg"]}>
              <svg
                className={
                  activeIndex === 0
                    ? styles["activesvg"]
                    : styles["noactivesvg"]
                }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1247_956)">
                  <path
                    d="M19.6093 7.51472L27.152 15.0574C27.402 15.3074 27.5424 15.6465 27.5424 16.0001C27.5424 16.3536 27.402 16.6927 27.152 16.9427L19.6093 24.4854C19.3579 24.7283 19.0211 24.8627 18.6715 24.8596C18.3219 24.8566 17.9875 24.7164 17.7402 24.4691C17.493 24.2219 17.3528 23.8875 17.3498 23.5379C17.3467 23.1883 17.4811 22.8515 17.724 22.6001L22.9907 17.3334H5.33333C4.97971 17.3334 4 17.5 4.0002 17C4 16.5 4 16.3537 4 16.0001C4 15.6464 4.00017 15.5 4.0002 15C4 14.5 4.97971 14.6667 5.33333 14.6667H22.9907L17.724 9.40005C17.5967 9.27705 17.4951 9.12993 17.4252 8.96726C17.3553 8.80458 17.3185 8.62962 17.317 8.45259C17.3155 8.27555 17.3492 8.09997 17.4162 7.93611C17.4833 7.77225 17.5823 7.62338 17.7075 7.49819C17.8327 7.373 17.9815 7.274 18.1454 7.20696C18.3093 7.13991 18.4848 7.10618 18.6619 7.10772C18.8389 7.10925 19.0139 7.14604 19.1765 7.21592C19.3392 7.28579 19.4863 7.38737 19.6093 7.51472Z"
                    fill="#DE4320"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1247_956">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
    
              <div className="slidetext">
                {" "}
                Noodles alana SushiTop hədiyyə <br />
                <span
                  className={
                    activeIndex === 0 ? styles["texttxt"] : styles["texttxt2"]
                  }
                >
                  {texts[activeIndex]}
                </span>
              </div>
            </div>{" "}
          </p>
    
          <p
            onClick={changeText}
            className={activeIndex === 1 ? styles["heading"] : ""}
          >
            <div className={styles["slidesvg"]}>
              <svg
                className={
                  activeIndex === 1
                    ? styles["activesvg"]
                    : styles["noactivesvg"]
                }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1247_956)">
                  <path
                    d="M19.6093 7.51472L27.152 15.0574C27.402 15.3074 27.5424 15.6465 27.5424 16.0001C27.5424 16.3536 27.402 16.6927 27.152 16.9427L19.6093 24.4854C19.3579 24.7283 19.0211 24.8627 18.6715 24.8596C18.3219 24.8566 17.9875 24.7164 17.7402 24.4691C17.493 24.2219 17.3528 23.8875 17.3498 23.5379C17.3467 23.1883 17.4811 22.8515 17.724 22.6001L22.9907 17.3334H5.33333C4.97971 17.3334 4 17.5 4.0002 17C4 16.5 4 16.3537 4 16.0001C4 15.6464 4.00017 15.5 4.0002 15C4 14.5 4.97971 14.6667 5.33333 14.6667H22.9907L17.724 9.40005C17.5967 9.27705 17.4951 9.12993 17.4252 8.96726C17.3553 8.80458 17.3185 8.62962 17.317 8.45259C17.3155 8.27555 17.3492 8.09997 17.4162 7.93611C17.4833 7.77225 17.5823 7.62338 17.7075 7.49819C17.8327 7.373 17.9815 7.274 18.1454 7.20696C18.3093 7.13991 18.4848 7.10618 18.6619 7.10772C18.8389 7.10925 19.0139 7.14604 19.1765 7.21592C19.3392 7.28579 19.4863 7.38737 19.6093 7.51472Z"
                    fill="#DE4320"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1247_956">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="slidetext">
                {" "}
                Promokodla 20% endirim <br />
                <span
                  className={
                    activeIndex === 1 ? styles["texttxt"] : styles["texttxt2"]
                  }
                >
                  {texts[activeIndex]}
                </span>
              </div>
            </div>{" "}
          </p>
          <p
            onClick={changeText}
            className={activeIndex === 2 ? styles["heading"] : ""}
          >
            <div className={styles["slidesvg"]}>
              <svg
                className={
                  activeIndex === 2
                    ? styles["activesvg"]
                    : styles["noactivesvg"]
                }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1247_956)">
                  <path
                    d="M19.6093 7.51472L27.152 15.0574C27.402 15.3074 27.5424 15.6465 27.5424 16.0001C27.5424 16.3536 27.402 16.6927 27.152 16.9427L19.6093 24.4854C19.3579 24.7283 19.0211 24.8627 18.6715 24.8596C18.3219 24.8566 17.9875 24.7164 17.7402 24.4691C17.493 24.2219 17.3528 23.8875 17.3498 23.5379C17.3467 23.1883 17.4811 22.8515 17.724 22.6001L22.9907 17.3334H5.33333C4.97971 17.3334 4 17.5 4.0002 17C4 16.5 4 16.3537 4 16.0001C4 15.6464 4.00017 15.5 4.0002 15C4 14.5 4.97971 14.6667 5.33333 14.6667H22.9907L17.724 9.40005C17.5967 9.27705 17.4951 9.12993 17.4252 8.96726C17.3553 8.80458 17.3185 8.62962 17.317 8.45259C17.3155 8.27555 17.3492 8.09997 17.4162 7.93611C17.4833 7.77225 17.5823 7.62338 17.7075 7.49819C17.8327 7.373 17.9815 7.274 18.1454 7.20696C18.3093 7.13991 18.4848 7.10618 18.6619 7.10772C18.8389 7.10925 19.0139 7.14604 19.1765 7.21592C19.3392 7.28579 19.4863 7.38737 19.6093 7.51472Z"
                    fill="#DE4320"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1247_956">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="slidetext">
                {" "}
                3 Rice alana 4-cü Rice hədiyyə <br />
                <span
                  className={
                    activeIndex === 2 ? styles["texttxt"] : styles["texttxt2"]
                  }
                >
                  {texts[activeIndex]}
                </span>
              </div>
            </div>{" "}
          </p>
        </div>
        <div className={styles["right_side"]}>
          <div className={styles["image_wrapper"]}>
            {CommitedImages.map((image, index) => (
              <div
                key={index}
                className={styles["image_item"]}
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
              >
                {image}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Commited;
