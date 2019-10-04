import React from "react";
import { Link } from "react-router-dom";

import "./FindOppnent.scss";

import User from "../../images/james.png";

const FindOppnent = () => {
  return (
    <div className="findopp mt-5">
      <div className="bos">
        <div className="details">
          <div className="col-md-6">
            <p className="gamename">
              MADDEN NFL 20 <br /> <span>Xbox One</span>
            </p>
            <div className="player mt-5">
              <img src={User} alt="" className="userimg" />
              <p className="norm">JamesMike</p>
            </div>
          </div>
          <div className="col-md-6">
            <p className="gamename">
              $1.9 <br />
              <span>Price Per Game</span>
            </p>
            <div className="player mt-5">
              <img src="" alt="" />
              <p className="norm">
                Find an Opponent <br />{" "}
                <span>Estimated Wait Time: 2 minutes</span>
              </p>
            </div>
          </div>

          <div className="versus mt-3">
            <p className="vs">VS</p>
          </div>
        </div>

        <Link to="/dashboard/jamesmike/enterusername" className="btn">
          Find an Opponent
        </Link>
        <Link to="/dashboard/jamesmike/matches" className="btn">
          Explore Other Contests
        </Link>
      </div>
    </div>
  );
};

export default FindOppnent;
