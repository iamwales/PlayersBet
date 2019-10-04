import React from "react";

import "./SideInst.scss";

import Gamepad from "../../images/gamepad.png";
import Versus from "../../images/versus.png";
import Troupy from "../../images/trophy.png";

const SideInstr = () => {
  return (
    <div className="sideins mt-5">
      <div className="bos">
        <p className="head">How To Play</p>
        <div className="inst1">
          <div className="pic">
            <img src={Gamepad} alt="" className="how" />
          </div>
          <d className="ins">
            <p className="norm">
              We will match you with an opponent of similar skill
            </p>
          </d>
        </div>
        <div className="inst1">
          <div className="pic">
            <img src={Versus} alt="" className="how" />
          </div>
          <d className="ins">
            <p className="norm">
              You play each other online on PS, Xbox One, or PC
            </p>
          </d>
        </div>
        <div className="inst1">
          <div className="pic">
            <img src={Troupy} alt="" className="how" />
          </div>
          <d className="ins">
            <p className="norm">Win and receive cash instantly</p>
          </d>
        </div>
      </div>

      <div className="bos mt-4">
        <p className="head">Finding Your Opponent</p>
        <p className="norm">
          We do our best to match you with an opponent of equal or similar
          skill.
        </p>
        <p className="norm">
          Players are assigned a skill rating on a 1-5 scale, with 5 being the
          most skilled players. We use a complex algorithm to assess a player’s
          skill. The algorithm considers a player’s winning percentage, opponent
          strength, and prize money won, among other factors. A new player’s
          rank displays as “N/A.” We don’t know how good they are yet, but we
          will assign them a rank after 3 head-to-head games!
        </p>
      </div>
    </div>
  );
};

export default SideInstr;
