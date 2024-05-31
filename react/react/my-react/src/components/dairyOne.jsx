import React, { useState } from "react";
import styles from "./dairyOne.module.css";
import { Link } from "react-router-dom";
import image3 from "./image3.png";
import image1 from "./image1.png";
import Layer19 from "./Layer19.png";
import DairyTwo from "./dairyTwo";

const DairyOne = () => {
  const [breakfastClick, setBreakfastClick] = useState(false);
  const [breakfastHeight, setBreakfastHeight] = useState('60px');
  const [lunchClick, setLunchClick] = useState(false);
  const [lunchHeight, setLunchHeight] = useState('60px');
  const [dinnerClick, setDinnerClick] = useState(false);
  const [dinnerHeight, setDinnerHeight] = useState('60px');


  function handleBreakfast() {
    setBreakfastClick(!breakfastClick);
    setBreakfastHeight(breakfastHeight == '150px'? '60px': '150px');
  }
  function handleLunch() {
    setLunchClick(!lunchClick);
    setLunchHeight(lunchHeight == '150px'? '60px': '150px');
  }
  function handleDinner() {
    setDinnerClick(!dinnerClick);
    setDinnerHeight(dinnerHeight == '150px'? '60px': '150px');
  }
  return (
    <div>
      <div className={styles.header}>
        <div className={styles["logo-container"]}>
          <a className={styles["logo-link"]} href="">
            <p>clarity tracker</p>
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
              <img src={Layer19} alt="Profile" />
              Profile
            </a>
            <div className={styles.line}></div>
          </li>
        </ul>
      </div>
      <div className={styles["container-for-background"]}>
        <img src={image1} alt="" />
        <img src={image3} alt="" />
        <div className={styles["container-for-diary"]}>
          <div className={styles.diary}>
            <a href="" className={styles["first-p"]}>
              Diary
            </a>
            <Link to="/reports" className={styles["p-23"]}>
              Reports
            </Link>
            <a href="" className={styles["p-23"]}>
              Goal
            </a>
          </div>
        </div>
        <div className={styles["container-for-characteristics"]}>
          {/* <div className={styles.characteristics}>
            <div className={styles["breakfast-container"]}>
              <div className={styles.breakfast}>
                <p>Breakfast</p>
                <div className={styles.plus}></div>
              </div>
            </div>
            <div className={styles["lunch-container"]}>
              <div className={styles.lunch}>
                <p>Lunch</p>
                <div className={styles.plus}></div>
              </div>
            </div>
           
          </div> */}
          <div className={styles.breakfast} style={{height:`${breakfastHeight}`, backgroundColor:'rgba(242, 242, 242, 1)' , borderRadius:'25px'}}>
            <div className={styles.breakfastElement}>
              <p>Breakfast</p>
              <div className={styles.plus} onClick={handleBreakfast}></div>
            </div>
            {breakfastClick && (
                <input type="text" placeholder="Search" style={{borderRadius:'20px', backgroundColor:'white', width:'98%', height:'55px', border:'none' , boxShadow: "3px 3px 13px 8px rgba(0, 0, 0, 0.35)" , marginTop:'20px'}} />
            )}
          </div>
          <div className={styles.lunch} style={{height:`${lunchHeight}` , backgroundColor:'rgba(242, 242, 242, 1)' , borderRadius:'25px'}}>
            <div className={styles.lunchElement}>
              <p>Lunch</p>
              <div className={styles.plus} onClick={handleLunch}></div>
            </div>
            {lunchClick && (
                <input type="text" placeholder="Search" style={{borderRadius:'20px', backgroundColor:'white', width:'98%', height:'55px', border:'none' , boxShadow: "3px 3px 13px 8px rgba(0, 0, 0, 0.35)", marginTop:'20px'}} />
            )}
          </div>
          <div className={styles.dinner} style={{height:`${dinnerHeight}`, backgroundColor:'rgba(242, 242, 242, 1)' , borderRadius:'25px'}}>
            <div className={styles.dinnerElement}>
              <p>Dinner</p>
              <div className={styles.plus} onClick={handleDinner}></div>
            </div>
            {dinnerClick && (
                <input type="text" placeholder="Search" style={{borderRadius:'20px', backgroundColor:'white', width:'98%', height:'55px', border:'none', boxShadow: "3px 3px 13px 8px rgba(0, 0, 0, 0.35)", marginTop:'20px'}}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyOne;
