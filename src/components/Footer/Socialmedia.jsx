import wolt from "../../assets/wolt.png";
import darkmood from "../../assets/darkmood.png";
import Theme from "../Theme/Theme";

const SocialMedia = () => {
  return (
    <>
      <div className="right">
        <a className="darkMode" target="_blank" rel="noreferrer">
          <div className="footer-bottom-up-el_div_icon">
            <Theme />
            {/* <img src={darkmood} alt="" /> */}
          </div>
        </a>

        <a
          className="insta"
          href="https://www.instagram.com/roll_master_azerbaijan/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-bottom-up-el_div_icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0H7C5.14409 0.00198528 3.36477 0.740121 2.05245 2.05245C0.740121 3.36477 0.00198528 5.14409 0 7V19C0.00198528 20.8559 0.740121 22.6352 2.05245 23.9476C3.36477 25.2599 5.14409 25.998 7 26H19C20.8559 25.998 22.6352 25.2599 23.9476 23.9476C25.2599 22.6352 25.998 20.8559 26 19V7C25.998 5.14409 25.2599 3.36477 23.9476 2.05245C22.6352 0.740121 20.8559 0.00198528 19 0ZM13 19C11.8133 19 10.6533 18.6481 9.66658 17.9888C8.67988 17.3295 7.91085 16.3925 7.45672 15.2961C7.0026 14.1997 6.88378 12.9933 7.11529 11.8295C7.3468 10.6656 7.91824 9.59647 8.75736 8.75736C9.59647 7.91824 10.6656 7.3468 11.8295 7.11529C12.9933 6.88378 14.1997 7.0026 15.2961 7.45672C16.3925 7.91085 17.3295 8.67988 17.9888 9.66658C18.6481 10.6533 19 11.8133 19 13C18.9983 14.5908 18.3657 16.116 17.2408 17.2408C16.116 18.3657 14.5908 18.9983 13 19ZM20.5 7C20.2033 7 19.9133 6.91203 19.6666 6.7472C19.42 6.58238 19.2277 6.34811 19.1142 6.07403C19.0007 5.79994 18.9709 5.49834 19.0288 5.20736C19.0867 4.91639 19.2296 4.64912 19.4393 4.43934C19.6491 4.22956 19.9164 4.0867 20.2074 4.02882C20.4983 3.97094 20.7999 4.00065 21.074 4.11418C21.3481 4.22771 21.5824 4.41997 21.7472 4.66664C21.912 4.91332 22 5.20333 22 5.5C22 5.89782 21.842 6.27936 21.5607 6.56066C21.2794 6.84196 20.8978 7 20.5 7ZM17 13C17 13.7911 16.7654 14.5645 16.3259 15.2223C15.8864 15.8801 15.2616 16.3928 14.5307 16.6955C13.7998 16.9983 12.9956 17.0775 12.2196 16.9231C11.4437 16.7688 10.731 16.3878 10.1716 15.8284C9.61216 15.269 9.2312 14.5563 9.07686 13.7804C8.92252 13.0044 9.00173 12.2002 9.30448 11.4693C9.60723 10.7384 10.1199 10.1136 10.7777 9.67412C11.4355 9.2346 12.2089 9 13 9C14.0609 9 15.0783 9.42143 15.8284 10.1716C16.5786 10.9217 17 11.9391 17 13Z"
                fill="#201F22"
              />
            </svg>
          </div>
        </a>
        <a
          className="face"
          href="https://www.facebook.com/people/Roll-Master/100092686596932/?mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-bottom-up-el_div_icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3332 14C27.3332 6.63996 21.3598 0.666626 13.9998 0.666626C6.63984 0.666626 0.666504 6.63996 0.666504 14C0.666504 20.4533 5.25317 25.8266 11.3332 27.0666V18H8.6665V14H11.3332V10.6666C11.3332 8.09329 13.4265 5.99996 15.9998 5.99996H19.3332V9.99996H16.6665C15.9332 9.99996 15.3332 10.6 15.3332 11.3333V14H19.3332V18H15.3332V27.2666C22.0665 26.6 27.3332 20.92 27.3332 14Z"
                fill="#201F22"
              />
            </svg>
          </div>
        </a>

        <a
          className="wolt"
          href="https://wolt.com/en/aze/baku/restaurant/rollmaster"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-bottom-up-el_div_icon">
            <img src={wolt} alt="" />
          </div>
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
