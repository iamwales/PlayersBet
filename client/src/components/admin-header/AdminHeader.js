import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";

import "./AdminHeader.scss";

import Noti from "../../images/notification.png";

const AdminHeader = () => {
  return (
    <div className="dbheader">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <Link to="/" className="logo">
                Player'sLeague
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="link">
              <Link className="link-a" to="/admin/dashboard">
                Dashboard
              </Link>
              <Link className="link-a" to="/admin/games">
                Games
              </Link>
              <Link className="link-a" to="/admin/players">
                Players
              </Link>
            </div>
          </div>
          <div className="col-md-3 H-side float-right">
            <div className="username">
              <p className="norm">James Mike</p>
            </div>
            <div className="notif">
              <img src={Noti} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminHeader);
