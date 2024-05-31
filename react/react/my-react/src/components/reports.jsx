import React from "react";
import styles from "./reports.module.css"; 
import { Link } from "react-router-dom";
import image3 from "./image3.png";
import image1 from "./image1.png";
import Layer19 from "./Layer19.png";

function Reports() {
  return (
    <div>
      <header className={styles.header} >
        <div className={styles["logo-container"]}>
          <a className={styles.logoLink} href="">
            <Link to={'/'}>clarity tracker</Link>
          </a>
        </div>
        <ul className={styles["profile-ul"]}>
          <li className={styles["profile-1"]}>
            <a href="">Training Plan</a>
            <div className={styles.line}></div>
            <a href="">Nutrition</a>
            <div className={styles.line}></div>
            <a href="">Training Plan</a>
            <div className={styles.line}></div>
            <a href="">
              <img src={Layer19} alt="" />
              Profile
            </a>
            <div className={styles.line}></div>
          </li>
        </ul>
      </header>
      <div className={styles["container-for-background"]}>
        <div className={styles.imgOne}>
          <img src={image1} alt="" />
        </div>
        <div className={styles.imgTwo}>
          <img src={image3} alt="" />
        </div>
        <div className={styles["container-for-diary"]}>
          <div className={styles.diary}>
            <Link to={'/dairyOne'} className={styles["p-23"]}>Diary</Link>
            <a href="" className={styles["first-p"]}>
              Reports
            </a>
            <a href="" className={styles["p-23"]}>
              Goal
            </a>
          </div>
        </div>
        <div className={styles["container-for-characteristics"]}>
          <div className={styles["breakfast-container"]}>
            <div className={styles.breakfast}>
              <p>Calories</p>
              <div className={styles.arrow}></div>
            </div>
          </div>
          <div style={{marginBottom:'40px'}}>
            <div className={styles["big-kcal"]}>
              <p>1488</p>
              <p>kcal</p>
            </div>
            <div className={styles["small-kcal"]}>
              <p>Daily average: 2986kcal</p>
              <p>Goal: 3600kcal</p>
            </div>
          </div>
          <div className={styles.tablichka}>
            <div className={styles.tablichkaRow}>
              <div className={styles.tablickaElement}>Goal</div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
            </div>
            <div className={styles.tablichkaRow}>
              <div className={styles.tablickaElement}>Avg</div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
            </div>
            <div className={styles.tablichkaRow}>
              <div className={styles.tablickaElement}>
                <div className={styles.tablickaGram}></div>
              </div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
              <div className={styles.tablickaElement}></div>
            </div>
            <div className={styles.tablichkaRow}>
              <div className={styles.tablickaElement}>Mo 15</div>
              <div className={styles.tablickaElement}>Tu 16</div>
              <div className={styles.tablickaElement}>We 17</div>
              <div className={styles.tablickaElement}>Th 18</div>
              <div className={styles.tablickaElement}>Fr 19</div>
              <div className={styles.tablickaElement}>Sa 20</div>
              <div className={styles.tablickaElement}>Su 21</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
