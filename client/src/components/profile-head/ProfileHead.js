import React from "react";

import "./ProfileHead.scss";

import UserImg from "../../images/james.png";

const ProfileHead = () => {
  return (
    <div className="profileHead">
      <div className="container">
        <div className="user-img">
          <img src={UserImg} alt="" className="user" />
        </div>
        <div className="user-info">
          <div className="name">
            <p className="name">James Mike</p>
          </div>
          <div className="user-details">
            <div className="matches">
              <p className="dek">
                0 <br /> <span>Matches</span>
              </p>
            </div>
            <div className="matches">
              <p className="dek">
                0 <br /> <span>Tournament</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
