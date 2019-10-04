import React from "react";

import Game_Collection from "../gamecard/GamecardCollection";
import CardView from "../gamecard/GameCard";

import Game_Tournament from "../tournament/Tournament-collection";
import Tournament from "../tournament/Tournament";

import Chat from "../chat/Chat";
import RecentOpponent from "../recent-oppnent/RecentOpponent";

import "./Gamescards.scss";
import CustomMaches from "../custom-matches/Custom-matches";

class GamesCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Game_Collection,
      tournaments: Game_Tournament
    };
  }

  render() {
    const { collections, tournaments } = this.state;
    return (
      <div className="container mt-5">
        <div className="matchmaking">
          <p className="head">Matchmaking</p>
          <div className="row">
            <div className="col-md-8">
              <div className="matc">
                {collections.map(collection => (
                  <CardView key={collection.id} collection={collection} />
                ))}
              </div>
              <div className="tournament mt-5">
                <p className="head">Tournaments</p>
                <div className="matc">
                  {tournaments.map(tournament => (
                    <Tournament key={tournament.id} tournament={tournament} />
                  ))}
                </div>
              </div>

              <div className="tournament mt-5">
                <CustomMaches />
              </div>
            </div>

            <div className="col-md-4">
              <div className="side-view">
                <button className="btn">Refer A Friend, Get $20</button>
                <Chat />
                <RecentOpponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamesCards;
