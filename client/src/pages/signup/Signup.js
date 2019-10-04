import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";

import Fb from "../../images/fb.png";
import Tw from "../../images/tw.png";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
            <p className="title">SignUp</p>
            <p className="para">
              Already have an account{" "}
              <Link className="link-url" to="/login">
                Login
              </Link>
            </p>

            <form onSubmit={this.onSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name
                  })}
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                  placeholder="Email Address"
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
                  type="text"
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
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password2
                  })}
                  placeholder="Confirm Password"
                  value={this.state.password2}
                  onChange={this.handleChange}
                  name="password2"
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}
              </div>

              <input type="submit" className="btn" />
            </form>

            <div className="row mt-3">
              <div className="col-md-12">
                <Link to="/dashboard/jamesmike">
                  <button className="btn float-right">SignUp</button>{" "}
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

              <p className="welcome">Welcome</p>

              <p className="main">
                The quick, brown fox jumps over a lazy dog. DJs
                <br /> flock by when MTV ax quiz prog.
                <br /> Junk .
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//maps it to the store so you can reuse in other components
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
