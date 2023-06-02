
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import wolt from "../../assets/wolt.png";
import darkmood from "../../assets/darkmood.png";
import Theme from "../Theme/Theme";

const SocialMedia = () => {
  return (
    <div className="right">
      <a
        className="insta"
     
        target="_blank"
        rel="noreferrer"
      >
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
          <img src={insta} alt="" />
        </div>
      </a>
      <a
        className="face"
        href="https://www.facebook.com/people/Roll-Master/100092686596932/?mibextid=LQQJ4d"
        target="_blank"
        rel="noreferrer"
      >
        <div className="footer-bottom-up-el_div_icon">
          <img src={face} alt="" />
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
  );
};

export default SocialMedia;
