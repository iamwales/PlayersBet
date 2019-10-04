import React from "react";

import "./Recentmatch.scss";

import Person1 from "../../images/Ellipse 1.png";
import Person2 from "../../images/Ellipse 2.png";

const Recentmatch = () => {
  return (
    <div className="recentmatch">
      <div className="container">
        <div className="tit">
          <h3 className="title">Recent Matches</h3>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 lets">
            <img src={Person1} alt="" className="user" />
            <p>John Doe</p>
          </div>
          <div className="col-md-4 float-left">
            <img src={Person2} alt="" className="user" />
            <p>
              Jane Doe
              <br /> <span>winner</span>
            </p>
          </div>
          <div className="col-md-4">
            <p className="game-name">
              Fortnite <br />
              <span className="game-type">Xbox</span>
            </p>
            <p className="game-name">
              $5.00 <br />
              <span className="game-type">Price</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentmatch;
