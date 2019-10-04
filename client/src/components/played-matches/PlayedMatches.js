import React from "react";

import "./PlayedMatches.scss";

const PlayedMatches = () => {
  return (
    <div className="playedmatches mb-5">
      <div className="container">
        <div className="box-head mt-5 ml-5">
          <p className="hes">Match History</p>
        </div>

        <div className="box">
          <p className="center">There are no matches to display.</p>
        </div>
      </div>
    </div>
  );
};

export default PlayedMatches;
