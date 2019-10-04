import React from "react";
import { Link } from "react-router-dom";

import "./GamesHeader.scss";

import Player1 from "../../images/player1.png";
import Player2 from "../../images/Player2.png";

const GamesHeader = () => {
  return (
    <div className="gamesheader">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="game-name">
              <p className="game">MADDEN NFL 20</p>
              <Link to="/dashboard/jamesmike/findopponent" className="btn">
                Find an Opponent
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recent-matches">
              <p className="recent-match">
                Matches Recently Completed
                <br />
                <span>Xbox One / $30.00</span>
              </p>
              <div className="player">
                <div className="player1">
                  <img src={Player1} alt="" />
                  <p className="playername">John Doe</p>
                </div>
                <div className="player1">
                  <img src={Player2} alt="" />
                  <p className="playername">
                    Jane Doe <br />
                    <span>winner</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="matchmaking"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesHeader;
