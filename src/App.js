import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Signup from "./components/pages/Signup";
import Confirmation from "./components/pages/Confirmation";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import NewItem from "./components/pages/NewItem";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
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
    <GuestRoute
      location={location}
      path="/reset_password"
      exact
      component={ResetPassword}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={Dashboard}
    />
    <UserRoute
      location={location}
      path="/books/new"
      exact
      component={NewItem}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
