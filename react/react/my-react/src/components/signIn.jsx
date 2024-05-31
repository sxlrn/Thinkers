import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module2.css";
import { fetchData } from "../helpers/fetchApi";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const data = { email, password };

    const response = await fetchData("/user/login", "POST", data);
        console.log(response);
        if(response?.token){
            navigate('/reports');
        }else{
            console.log("login failed");
        }
  };
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            clarity tracker
          </Link>
        </div>
      </div>
      <div className="container-for-sign-in">
        <div className="email-and-password">
          <div className="group">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
          <div className="group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Password</label>
          </div>
        </div>
        <div className="comments">
          <p>Don't have an account yet?</p>
          <Link to="/register" className="reg">
            Register now
          </Link>
        </div>
        <div className="btn-sign-in">
          <button onClick={handleSignIn} className="btn">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;