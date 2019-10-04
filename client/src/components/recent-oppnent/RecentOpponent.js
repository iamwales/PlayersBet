import React from "react";

import "./RecentOpponent.scss";

const RecentOpponent = () => {
  return (
    <div className="chat mt-4">
      <div className="recentopp-head">
        <p className="norm">
          RECENT OPPONENTS <br />
          <span>MADDEN NFL 20 | Xbox</span>
        </p>
      </div>

      <div className="recentopp-empty mt-4">
        <p className="recentopp-empty p-4">
          You don't have any recent opponents for MADDEN NFL 20 on Xbox Try
          challenging someone new!
        </p>
      </div>
    </div>
  );
};

export default RecentOpponent;
