import React from "react";

import "./AdminGames.scss";

import AdminHeader from "../../../components/admin-header/AdminHeader";
import Admingames from "../../../components/admingames/AdminGames";

const AdminGames = () => {
  return (
    <div className="admindash">
      <AdminHeader />
      <Admingames />
    </div>
  );
};

export default AdminGames;
