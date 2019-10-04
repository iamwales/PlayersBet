import React from "react";
import { Link } from "react-router-dom";

import GameImg from "../../images/Group 4.png";
import Fifa from "../../images/fifa.png";
import Morta from "../../images/morta.png";
import Leftarr from "../../images/leftarr.png";
import Rightarr from "../../images/rightarr.png";

import "./Games.scss";

const Games = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="game-head">
        <h3 className="games-heading">Chose a game to get started</h3>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="game-body">
              <img className="d-block w-100 " src={GameImg} alt="First slide" />

              <div className="game-detils">
                <p className="game-nam">MADDEN NFL 20</p>
                <p className="game-played">
                  5, 390 <br></br>
                  <span>Matches played last month</span>
                </p>
                <Link to="/dashboard/jamesmike" className="game-join">
                  Join League
                </Link>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="game-body">
              <img className="d-block w-100 " src={Fifa} alt="First slide" />

              <div className="game-detils">
                <p className="game-nam">Fifa 19</p>
                <p className="game-played">
                  10, 390 <br></br>
                  <span>Matches played last month</span>
                </p>
                <Link to="/dashboard/jamesmike" className="game-join">
                  Join League
                </Link>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="game-body">
              <img className="d-block w-100 " src={Morta} alt="First slide" />

              <div className="game-detils">
                <p className="game-nam">Mortal Kombat</p>
                <p className="game-played">
                  2, 390 <br></br>
                  <span>Matches played last month</span>
                </p>
                <Link to="/dashboard/jamesmike" className="game-join">
                  Join League
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="mt-5 ww">
            <a
              className=""
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              {" "}
              <img
                src={Leftarr}
                alt=""
                className="arr left"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              />
              <span className="" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              className=""
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <img
                src={Rightarr}
                alt=""
                className="arr right"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              />
              <span className="" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
