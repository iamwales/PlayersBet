import React from "react";

import "./Tournament.scss";

const Tournament = ({ tournament }) => {
  const { name, winner, entry } = tournament;
  return (
    <div className="col-md-6">
      <div className="gamecard">
        <div className="card">
          <div className="col-md-6 ">
            <div className="game-det">
              <p className="game">
                {name} <br /> <span>3v3 Odd Man Out</span>
              </p>
            </div>
            <div className="game-det">
              <p className="game">
                MADDEN NFL 20 <br /> <span>XBox</span>
              </p>
            </div>
          </div>

          <div className="col-md-6 wales">
            <div className="game-det mb-5">
              <p className="game">XBox</p>
            </div>
            <div className="game-det mt-5">
              <p className="game mt-5">
                {winner} <br /> <span>Price For Winner</span>
              </p>
            </div>
            <div className="join-btn mt-5">
              <button className="btn">{entry}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
