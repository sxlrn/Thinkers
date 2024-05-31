import React, { useState } from 'react';
import styles from './weightName.module.css';
import { Link } from "react-router-dom";
import image3 from "./image3.png";
import image1 from "./image1.png";
import Layer19 from "./Layer19.png";


const WeightName = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleButtonClick = (goal) => {
    setSelectedGoal(goal);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles['logo-container']}>
          <a className={styles['logo-link']} href="">
            <p>clarity tracker</p>
          </a>
        </div>
        <ul className={styles['profile-ul']}>
          <li className={styles['profile-1']}>
            <a href="">
            <img src={Layer19} alt="Profile" />
              Profile
            </a>
            <div className={styles.line}></div>
          </li>
        </ul>
      </div>
      <div className={styles['container-for-background']}>
        <img src={image1} alt="" />
        <img src={image3} alt="" />
        <div className={styles['container-for-characteristics']}>
          <div className={styles.texts}>
            <p>Thanks “name”! What is your goal?</p>
            <p>Select your weight goal.</p>
          </div>
          <div className={styles.weights}>
            <button
              className={selectedGoal === 'gain' ? styles.clicked : styles.myButton}
              onClick={() => handleButtonClick('gain')}
            >
              Gain weight
            </button>
            <button
              className={selectedGoal === 'maintain' ? styles.clicked : styles.myButton}
              onClick={() => handleButtonClick('maintain')}
            >
              Maintain weight
            </button>
            <button
              className={selectedGoal === 'lose' ? styles.clicked : styles.myButton}
              onClick={() => handleButtonClick('lose')}
            >
              Lose weight
            </button>
          </div>
          <div className={styles.btns}>
            <Link to={'/firstname'} className={styles.btn}>Back</Link>
            <Link to={'/dairyOne'} className={styles.btn}>Next</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightName;
