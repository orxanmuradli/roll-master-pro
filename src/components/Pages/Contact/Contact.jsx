import React, { useState } from "react";
import styles from "./Contact.module.css";
import insta from "../../../assets/insta.png";
import face from "../../../assets/face.png";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import wolt from "../../../assets/wolt.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Istifadəçi adı soyadi daxil edin";
    }

    if (!formData.number.trim()) {
      validationErrors.number = "Nomre daxil edin";
    }
    if (!formData.text.trim()) {
      validationErrors.text = "Isramic gonderin.";
    }
    setErrors(validationErrors);

    console.log(formData);
  };
  return (
    <section className={styles.sectioncontact}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className={styles.contacttwo}>
            <BreadCrumbs pathnames={["", "ƏLAQƏ"]} />
          </div>
          <div className={styles.contacttwo_h2}>
            <h2>Əlaqə</h2>
          </div>
          <div className={styles.main}>
            <div className={styles.leftside}>
              <p>İrad və təklifləriniz</p>
              <div className={styles.naming}>
                <label for="">Ad və soyad</label> <br />
                <input
                  type="text"
                  placeholder="Ad və soyad"
                  className={styles.inputss}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div className={styles.contact}>
                <label for="">Əlaqə nömrəsi</label> <br />
                <input
                  type="number"
                  placeholder="+994 "
                  className={styles.kjba}
                  onChange={handleChange}
                />
                {errors.number && <p>{errors.number}</p>}
              </div>
              <div className={styles.complain}>
                <label for="">Şikayətiniz / Təklifiniz</label> <br />
                <input
                  type="text"
                  placeholder="Şikayət və ya təklifinizi qeyd edin"
                  onChange={handleChange}
                />
                {errors.text && <p>{errors.text}</p>}
              </div>
            </div>
            <div className={styles.rightside}>
              <p>Sifariş üçün</p>
              <div className={styles.wolt}>
                <Link to="https://web.whatsapp.com/">+994517365616</Link>{" "}
                <img src={wolt} alt="" />
              </div>
              <p>Sosial şəbəkə</p>
              <div className={styles.sosials}>
                <img src={insta} alt="" />
                <img src={face} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.bottomsside}>
            <button className={styles.redsButton} type="submit">
              GÖNDƏR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
