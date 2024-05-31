import React from 'react';
import styles from './dairyTwo.module.css';
import Vector from "./Vector.png";


const DairyTwo = ({click , label}) => {
  return (
    
        <div className={styles["container-for-characteristics"]}>
          <div className={styles.characteristics}>
            <div className={styles.breakfast}>
              <p>{label}</p>
              <div onClick={() => click(false)}><img src={Vector} alt="Food Icon" /></div>              
              <p>Sunday, May 19</p>
            </div>
            <div className={styles.food}>
              <button>
                <div>Food&nbsp;
                    <img src={Vector} alt="Food Icon" /></div>
              </button>
            </div>
          </div>
        </div>
  );
};

export default DairyTwo;
