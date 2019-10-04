import React from "react";

import "./EnterUsername.scss";

const EnterUsername = () => {
  return (
    <div className="enterUSer mt-5">
      <div className="bos">
        <p className="head mt-4">Enter your XBox Username to join</p>
        <input
          type="text"
          className="input mt-4"
          placeholder="Enter your Username"
        />
        <button className="btn mt-5">Find Opponent</button>
      </div>
    </div>
  );
};

export default EnterUsername;
