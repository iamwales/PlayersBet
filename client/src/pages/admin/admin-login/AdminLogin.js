import React from "react";
import { Link } from "react-router-dom";

import "./AdminLogin.scss";

const AdminLogin = () => {
  return (
    <div className="adminlogin text-center">
      <div className="container">
        <div className="login-box">
          <div className="login-det">
            <p className="logo">Player'sLeague</p>
            <p className="norm">Admin Login</p>
          </div>

          <form action="" className="input-group">
            <input type="text" className="input" placeholder="Enter Email" />
            <input type="password" className="input" placeholder="Password" />
            <Link to="/admin/dashboard" className="btn mb-4">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
