import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-md-4">
          <div className="first">
            <h1 className="footer-logo">PlayersLeague</h1>
            <div className="social-media">
              <img src="" alt="" className="social" />
              <img src="" alt="" className="social" />
              <img src="" alt="" className="social" />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="links">
            <div className="footer-head">Links</div>
            <Link className="footer-link" to="/">
              {" "}
              Home{" "}
            </Link>
            <Link className="footer-link" to="/about">
              {" "}
              About{" "}
            </Link>
            <Link className="footer-link" to="/games">
              {" "}
              Games{" "}
            </Link>
          </div>
        </div>
        <div className="col-md-2">
          <div className="links">
            <div className="footer-head">More</div>
            <Link className="footer-link" to="/">
              {" "}
              Refer a friend{" "}
            </Link>
            <Link className="footer-link" to="/">
              {" "}
              Terms of Use{" "}
            </Link>
            <Link className="footer-link" to="/">
              {" "}
              Privacy Policy{" "}
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="subscribe">
            <h1 className="footer-logo">Subscribe</h1>
          </div>

          <div className="form">
            <input type="text" className="inp" placeholder="Enter your email" />
            <button className="sub-btn">SUBMIT</button>
          </div>
        </div>
      </div>

      <div className="footer-other">
        <div className=" mt-5 ">
          <p className="footer-txt">
            Players’ League is not endorsed by, directly affiliated with,
            maintained or sponsored by Apple Inc, Electronic Arts, Activision
            Blizzard, Take-Two Interactive, Microsoft, Xbox, Sony, Playstation
            or Epic Games. All content, games titles, trade names and/or trade
            dress, trademarks, artwork and associated imagery are trademarks
            and/or copyright material of their respective owners.
          </p>
        </div>
        <div className="">
          <p className="main">SSL Secured</p>
          <img src="" alt="" className="paymentmethod" />
          <img src="" alt="" className="paymentmethod" />
          <img src="" alt="" className="paymentmethod" />
        </div>

        <div className="">
          <p className="copyright">
            {new Date().getFullYear()} Players League. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
