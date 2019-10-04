import React from "react";

import "./AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="admindash mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 jame text-center">
            <div className="boo">
              <p className="game-name mt-4 mb-4">
                10, 450 <br />
                <span>Players</span>
              </p>
            </div>
          </div>

          <div className="col-md-4 jame text-center">
            <div className="boo">
              <p className="game-name mt-4 mb-4">
                1, 450 <br />
                <span>Games</span>
              </p>
            </div>
          </div>

          <div className="col-md-4 jame text-center">
            <div className="boo">
              <p className="game-name mt-4 mb-4">
                50 <br />
                <span>Unmatched Games</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
