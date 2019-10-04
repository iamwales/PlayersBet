import React from "react";

import "./Ourteam.scss";

import Ceo from "../../images/ceo.png";
import Cto from "../../images/cto.png";
import Coo from "../../images/coo.png";

const Ourteams = () => {
  return (
    <div className="ourteams">
      <div className="container">
        <div className="">
          <p className="ourteam-title">Our Team</p>
        </div>

        <div className="row mt-5 bt-5">
          <div className="col-md-4">
            <img src={Ceo} alt="" className="execu" />
            <p className="name">
              Grant Willls <br />
              <span>CEO</span>
            </p>
          </div>

          <div className="col-md-4">
            <img src={Coo} alt="" className="execu" />
            <p className="name">
              Jane Doe <br />
              <span>COO</span>
            </p>
          </div>

          <div className="col-md-4">
            <img src={Cto} alt="" className="execu" />
            <p className="name">
              John Doe <br />
              <span>CTO</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteams;
