import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";

import "./DB-header.scss";

import AddFund from "../../images/Addfund.png";
import Noti from "../../images/notification.png";

class DBHeader extends React.Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();

    this.props.history.push("/");
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div className="dbheader">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <p>Player'sLeague</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="link">
                <Link className="link-a" to="/dashboard/jamesmike">
                  Dashboard
                </Link>
                <Link className="link-a" to="/dashboard/jamesmike/profile">
                  Profile
                </Link>
                <Link className="link-a" to="/dashboard/jamesmike/matches">
                  Matches
                </Link>
              </div>
            </div>
            <div className="col-md-4 H-side">
              <div className="username">
                <p className="norm">{user.name}</p>
              </div>
              <div className="notif">
                <img src={Noti} alt="" />
              </div>
              <div className="account">
                <img src={AddFund} alt="" className="addfund" />

                <p className="norm">$50.00</p>
              </div>
              <div className="logout">
                <p className="norm" onClick={this.onLogoutClick.bind(this)}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DBHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DBHeader);
