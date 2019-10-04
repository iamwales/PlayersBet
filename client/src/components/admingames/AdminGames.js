import React from "react";

import "./AdminGames.scss";

import Meddan1 from "../../images/madden1.png";
import Fifa1 from "../../images/Fifa1.png";
import Mortal1 from "../../images/mortal1.png";
import AddGame from "../../images/addGame.png";

const AdminGames = () => {
  return (
    <div className="admingames mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 jame text-center">
            <div className="boo">
              <img src={Meddan1} alt="" className="headImg" />

              <p className="game-name mt-4 mb-4">Madden 20</p>
            </div>
          </div>

          <div className="col-md-4 jame text-center">
            <div className="boo">
              <img src={Fifa1} alt="" className="headImg" />

              <p className="game-name mt-4 mb-4">Fifa</p>
            </div>
          </div>

          <div className="col-md-4 jame text-center">
            <div className="boo">
              <img src={Mortal1} alt="" className="headImg" />

              <p className="game-name mt-4 mb-4">Mortal Kombat</p>
            </div>
          </div>

          <div className="col-md-4 jame text-center">
            <div className="boo">
              <img src={AddGame} alt="" className="headImg" />

              <p className="game-name mt-4 mb-4">Add New Game</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGames;
