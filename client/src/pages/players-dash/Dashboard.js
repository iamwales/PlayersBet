import React from "react";

import DBHeader from "../../components/DB-header/DB-header";
import SelectGame from "../../components/selectGames/SelectGames";
import GameHeader from "../../components/DBGameHeader/GamesHeader";
import Matchmaking from "../../components/game-cards/Gamecards";
import Footer from "../../components/footer/Footer";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <DBHeader />
        <SelectGame />
        <GameHeader />

        <Matchmaking />

        <Footer />
      </div>
    );
  }
}

export default Dashboard;
