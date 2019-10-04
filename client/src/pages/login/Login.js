import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";

import { Link } from "react-router-dom";

import Fb from "../../images/fb.png";
import Tw from "../../images/tw.png";

import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="row">
          <div className="col-md-6 left-design">
            <div className="mobile">
              <Link className="logo" to="/">
                PlayersLeague
              </Link>
            </div>
            <p className="title">Login</p>
            <p className="para">
              Don't have an account yet?{" "}
              <Link className="link-url" to="/signup">
                Create an Account
              </Link>
            </p>

            <form onSubmit={this.onSubmit} className="form-group">
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <input type="submit" className="btn" />
            </form>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  className="select mr-2 ml-2"
                />
                Remember Me
              </div>
              <div className="col-md-6 ">
                <Link className="link-url float-right" to="/forgetpassword">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <Link to="/dashboard/jamesmike" className="btn float-right">
                  Login
                </Link>
              </div>
            </div>

            {/* <div className="other-login col-md-12 mt-3">
              <p className="main">Or login with</p>
              <button className="btn">
                <img src={Fb} alt="facebook-login" className="icon" />
              </button>
              <button className="btn ml-3">
                <img src={Tw} alt="twitter-login" className="icon2" />
              </button>
            </div> */}
          </div>

          <div className="side-bg"></div>

          <div className="col-md-6 side-design">
            <div className="side-content">
              <Link to="/" className="logo">
                PlayersLeague
              </Link>

              <p className="welcome">
                Welcome
                <br /> Back
              </p>

              <p className="main">
                The quick, brown fox jumps over a lazy dog. DJs
                <br /> flock by when MTV ax quiz prog.
                <br /> Junk MTV.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
