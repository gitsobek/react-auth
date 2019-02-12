import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Signup from "./components/pages/Signup";
import Confirmation from "./components/pages/Confirmation";
import ForgotPassword from "./components/pages/ForgotPassword";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={Homepage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={Confirmation}
    />
    <GuestRoute location={location} path="/login" exact component={Login} />
    <GuestRoute location={location} path="/signup" exact component={Signup} />
    <GuestRoute
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPassword}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={Dashboard}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
