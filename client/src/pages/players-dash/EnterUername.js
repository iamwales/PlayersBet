import React from "react";

import GameHeader from "../../components/DB-header/DB-header";
import EnterUsernameToGame from "../../components/enterusername/EnterUsername";
import GameRules from "../../components/gamerules/GamesRules";
import SideInstruction from "../../components/side-inst/SideInst";
import Footer from "../../components/footer/Footer";

const EnterUsername = () => {
  return (
    <div className="findOpp">
      <GameHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <EnterUsernameToGame />
            <GameRules />
          </div>
          <div className="col-md-4">
            <SideInstruction />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnterUsername;
