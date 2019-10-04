import React from "react";

import "./AdminDashboard.scss";

import AdminHeader from "../../../components/admin-header/AdminHeader";
import AdminDash from "../../../components/admin-dashboard/AdminDashboard";

const AdminDashboard = () => {
  return (
    <div className="admindash">
      <AdminHeader />
      <AdminDash />
    </div>
  );
};

export default AdminDashboard;
