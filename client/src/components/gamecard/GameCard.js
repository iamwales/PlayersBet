import React from "react";
import { Link } from "react-router-dom";

import "./GameCard.scss";

const GameCard = ({ collection }) => {
  const { price, winner, players } = collection;
  return (
    <div className="col-md-6">
      <div className="gamecard">
        <div className="card">
          <div className="col-md-6 ">
            <div className="game-det">
              <p className="game">
                MADDEN NFL 20 <br /> <span>1v1</span>
              </p>
            </div>
            <div className="game-det">
              <p className="game">
                {price} <br /> <span>Entry Per Game</span>
              </p>
            </div>
            <div className="game-det">
              <img src="" alt="" className="users-room" />
              <p className="game">
                {players} <br /> <span>Players in room</span>
              </p>
            </div>
          </div>

          <div className="col-md-6 wales">
            <div className="game-det mb-5">
              <p className="game">XBox</p>
            </div>
            <div className="game-det mb-5">
              <p className="game">
                {winner} <br /> <span>Price For Winner</span>
              </p>
            </div>
            <div className="join-btn mt-5">
              <Link to="/dashboard/jamesmike/findopponent" className="btn">
                JOIN ROOM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
