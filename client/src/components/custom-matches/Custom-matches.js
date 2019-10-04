import React from "react";

import "./Custom-matches.scss";

const CustomMaches = () => {
  return (
    <div className="custom">
      <div className="container">
        <div className="dash-head">
          <p className="head">Custom Matches</p>
        </div>

        <div className="custom-matches ml-4">
          <p className="no-custom">THERE ARE NO CUSTOM MATCHES TO BE SHOWN.</p>
        </div>

        <button className="btn ml-4 mt-3 mb-5">Create a Match</button>
      </div>
    </div>
  );
};

export default CustomMaches;
