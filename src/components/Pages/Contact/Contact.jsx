import React from "react";
import styles from "./Contact.module.css";
import insta from "../../../assets/insta.png";
import face from "../../../assets/face.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import wolt from "../../../assets/wolt.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className={styles.sectioncontact}>
      <div className={styles.contacttwo}>
        <BreadCrumbs pathnames={["", "KAMPANYALAR"]} />
      </div>
      <h2>Əlaqə</h2>
      <div className={styles.main}>
        <div className={styles.leftside}>
          <p>İrad və təklifləriniz</p>
          <div className={styles.naming}>
            <label for="">Ad və soyad</label> <br />
            <input
              type="text"
              placeholder="Ad və soyad"
              className={styles.inputss}
            />
          </div>
          <div className={styles.contact}>
            <label for="">Əlaqə nömrəsi</label> <br />
            <input type="number" placeholder="+994 " className={styles.kjba} />
          </div>
          <div className={styles.complain}>
            <label for="">Şikayətiniz / Təklifiniz</label> <br />
            <input
              type="text"
              placeholder="Şikayət və ya təklifinizi qeyd edin"
            />
          </div>
        </div>
        <div className={styles.rightside}>
          <p>Sifariş üçün</p>
          <div className={styles.wolt}>
            <Link to="#">+994517365616</Link> <img src={wolt} alt="" />
          </div>
          <p>Sosial şəbəkə</p>
          <div className={styles.sosials}>
            <img src={insta} alt="" />
            <img src={face} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bottomsside}>
        <button className={styles.redsButton}>GÖNDƏR</button>
      </div>
    </section>
  );
};

export default Contact;
