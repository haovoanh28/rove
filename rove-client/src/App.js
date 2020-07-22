import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import {SuccessMessage} from './App.styles';

import Header from "./pages/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignUpPage from "./pages/signup/signup-page.component";
import Communication from "./pages/communication/communication.component";
import EditProfile from "./pages/edit-profile/edit-profile.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ currentUser }) {
  return (
    <div className="AppContainer">
    <SuccessMessage id="success-message"></SuccessMessage>
    <div id="err-message"></div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
        />
        <Route
          path="/communication"
          render={() => (currentUser ? <Communication /> : <Redirect to="/" />)}
        />
        <Route
          path="/edit"
          render={() => (currentUser ? <EditProfile /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(App);
