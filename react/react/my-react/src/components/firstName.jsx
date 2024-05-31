import React from 'react';
import styles from './Register.module.css';
import image3 from "./image3.png";
import image1 from "./image1.png";
import Layer19 from "./Layer19.png";
import { Link } from "react-router-dom";


// Importing fonts
import '@fontsource/aldrich';
import '@fontsource/alegreya-sc';
import '@fontsource/alegreya-sans-sc';
import '@fontsource/alata';
import '@fontsource/archivo-black';

const Profile = () => {
  return (
    <div>
      <header className={styles["header"]}>
        <div className={styles["logoContainer"]}>
          <a className={styles["logoLink"]} href="/">
            <p>clarity tracker</p>
          </a>
        </div>
        <ul className={styles["profileUl"]}>
          <li className={styles["profile1"]}>
            <a href="/">Training Plan</a>
            <div className={styles["line"]}></div>
            <a href="/">Nutrition</a>
            <div className={styles["line"]}></div>
            <a href="/">Training Plan</a>
            <div className={styles["line"]}></div>
            <a href="/">
              <img src={Layer19} alt="Profile" />Profile
            </a>
            <div className={styles["line"]}></div>
          </li>
        </ul>
      </header>
      <div className={styles["containerForBackground"]}>
        <img src={image1} alt="" />
        <img src={image3} alt="" />
        <div className={styles["containerForCharacteristics"]}>
          <div className={styles["text"]}>
            <p>What’s your first name?</p>
            <p>Let’s get to know a little about you.</p>
          </div>
          <div className={styles["firstName"]}>
            <div className={styles["group"]}>
              <input type="text" required="required" />
              <span className={styles["highlight"]}></span>
              <span className={styles["bar"]}></span>
              <label>First name</label>
            </div>
          </div>
          <div className={styles["btns"]}>
            <a className={styles["btn"]} href="/">Back</a>
            <Link to={'/weightName'} className={styles["btn"]}>Next</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
