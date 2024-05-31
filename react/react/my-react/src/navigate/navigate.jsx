import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Импортируем компонент SignUp из правильного пути
import SignUp from "../components/first";
import SignIn from "../components/signIn";
import Register from "../components/register";
import Profile from '../components/firstName';
import WeightName from '../components/weightName';
import DairyOne from '../components/dairyOne';
import DairyTwo from '../components/dairyTwo';
import Reports from '../components/reports';

function Navigation() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/firstname" element={<Profile />} />
          <Route path="/weightName" element={<WeightName />} />
          <Route path="/dairyOne" element={<DairyOne />} />
          <Route path="/dairyTwo" element={<DairyTwo />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
