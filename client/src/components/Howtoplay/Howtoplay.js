import React from "react";

import Versus from "../../images/versus.png";
import Gamepad from "../../images/gamepad.png";
import Award from "../../images/trophy.png";

import "./Howtoplay.scss";

const HowToPlay = () => {
  return (
    <div className="howtoplay mt-5">
      <div className="container mt-5">
        <div className="howtoplay-head mb-5">
          <h3 className="head-title">How To Play</h3>
        </div>

        <div className="row">
          {/* Versus */}
          <div className="col-md-4 howtoplay-con">
            <div className="nums">
              <p className="number">-01-</p>
            </div>
            <div className="img">
              <img src={Versus} alt="Versus" className="m-img" />
            </div>
            <div className="text">
              <p className="con">
                We will match you with an opponent
                <br /> of similar skill
              </p>
            </div>
          </div>

          {/* Gamepad */}
          <div className="col-md-4 howtoplay-con">
            <div className="nums">
              <p className="number">-02-</p>
            </div>
            <div className="img">
              <img src={Gamepad} alt="Gamepad" className="m-img" />
            </div>
            <div className="text mt-3">
              <p className="con">
                You play each other online on
                <br /> PS, Xbox One, or PC
              </p>
            </div>
          </div>

          {/* Award */}
          <div className="col-md-4 howtoplay-con">
            <div className="nums">
              <p className="number">-03-</p>
            </div>
            <div className="img">
              <img src={Award} alt="Versus" className="m-img" />
            </div>
            <div className="text">
              <p className="con">Win and receive cash instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
