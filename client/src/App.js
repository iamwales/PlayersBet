import React from "react";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import store from "./store";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Games from "./pages/games/Games";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/players-dash/Dashboard";
import Profile from "./pages/players-dash/Profile";
import Matches from "./pages/players-dash/Matches";
import FindOpponent from "./pages/players-dash/FindOpponen";
import EnterUsername from "./pages/players-dash/EnterUername";

// Admin
import AdminLogin from "./pages/admin/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";
import AdminGames from "./pages/admin/admingames/AdminGames";
import AdminPlayers from "./pages/admin/adminplayers/AdminPlayers";

import "./App.css";

//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get uer info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired time
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //Todo Clear current Profile
    //Redirect to login

    window.location.href = "/";
  }
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard/jamesmike" component={Dashboard} />
        <Route exact path="/dashboard/jamesmike/profile" component={Profile} />
        <Route exact path="/dashboard/jamesmike/matches" component={Matches} />
        <Route
          exact
          path="/dashboard/jamesmike/enterusername"
          component={EnterUsername}
        />
        <Route
          exact
          path="/dashboard/jamesmike/findopponent"
          component={FindOpponent}
        />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/games" component={AdminGames} />
        <Route exact path="/admin/players" component={AdminPlayers} />
      </Switch>
    </div>
  );
}

export default App;
