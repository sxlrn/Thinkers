// SignUp.js

import React from "react";
import styles from "./styles.module.css"; // Import the CSS module
import image2 from "./image2.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["logo-container"]}>
          <a className={styles["logo-link"]} href="/">
            <p>clarity tracker</p>
          </a>
        </div>
        
      </div>
      <div className={styles["container-for-text-and-plate"]}>
        <div className={styles["plate-img"]}>
          <img src={image2} />
        </div>
        <div className={styles["text"]}>
            <div className={styles["text-1"]}>
              <p>Don’t hesitate</p>
            </div>
            <div className={styles["text-2"]}>
              <p>start</p>
            </div>
            <div className={styles["btns"]}>
              <Link to="/signIn" className={styles["btn-1"]}>
                Sign in
              </Link>
              <p>or</p>
              <Link to="/register" className={styles["btn-2"]}>
                Register
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
