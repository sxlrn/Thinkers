import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../helpers/fetchApi";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const data = { email, password };

        const response = await fetchData("/user/register", "POST", data);
        console.log(response);
        if(response?.password){
            navigate('/firstname');
        }else{
            console.log("register failed");
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
          <p>Already have an account?</p>
          <Link to="/signIn" className="reg">
            Sign in
          </Link>
        </div>
        <div className="btn-sign-in">
          <button onClick={handleRegister} className="btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;