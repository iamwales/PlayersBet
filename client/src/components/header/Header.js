import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/bck.png";

import "./Header.scss";

const Home = ({ title }) => {
  return (
    <div className="header">
      <div className="header-nav">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand logo" href="#">
            PlayersLeague
          </Link>
          <button
            className="navbar-toggler opa"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="ion-android-menu text-center svg2"></i>
          </button>
          <div className="collapse navbar-collapse pb-3" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active link">
                <Link className="link-a" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item link">
                <Link className="link-a nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item link">
                <Link className="link-a nav-link" to="/games">
                  Games
                </Link>
              </li>
              <li class="nav-item link">
                <Link className="link-a nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item link">
                <Link className="link-a nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="header-body">
        <div className="header-fi">
          <h1 className="header-main">{title}</h1>
          <p className="header-para">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack.
          </p>

          <Link to="/signup" className="btn">
            START PLAYING
          </Link>
        </div>

        <div className="header-design">
          <img src={Logo} alt="" className="header-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
