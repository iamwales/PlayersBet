import React from "react";

import { Link } from "react-router-dom";

import "./SelectGames.scss";

const SelectGames = () => {
  return (
    <div className="selectgame">
      <div className="col-md-3 ml-5">
        <div className="game-name tb dropdown">
          <p
            className="norms dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            XBox
          </p>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/dashboard/jamesmike" class="dropdown-item">
              Xbox
            </Link>
            <Link to="/dashboard/jamesmike" class="dropdown-item">
              Ps4
            </Link>
            <Link to="/dashboard/jamesmike" class="dropdown-item">
              Pc
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="game-name dropdown">
          <p
            className="norms dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MADDEN NFL 20
          </p>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/dashboard/jamesmike" class="dropdown-item">
              MADDEN NFL 20
            </Link>
            <Link to="/dashboard/jamesmike" class="dropdown-item">
              Mortal Combat
            </Link>
            <Link to="/dashboard/jamesmike" class="dropdown-item">
              FIfi 2019
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SelectGames;
