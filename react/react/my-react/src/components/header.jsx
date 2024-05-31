import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
        <div className="logo-container">
          <Link to={'/'}  className="logo-link">clarity tracker</Link>
        </div>
        <ul className="profile-ul">
          <li className="profile-1">
            <a href="/">Training Plan</a>
            <div className="line"></div>
            <a href="/">Nutrition</a>
            <div className="line"></div>
            <a href="/">Training Plan</a>
            <div className="line"></div>
            <a href="/">Profile</a>
            <div className="line"></div>
          </li>
        </ul>
      </div>
    )
}

export default Header;