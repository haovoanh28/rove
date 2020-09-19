import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { SuccessMessage, ErrorMessage } from "./App.styles";

import Header from "./pages/header/header.component";
import Footer from "./pages/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import SignUpPage from "./pages/signup/signup-page.component";
import Communication from "./pages/communication/communication.component";
import EditProfile from "./pages/edit-profile/edit-profile.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import {
  createSocket,
  onReceiveMessage,
  closeSocket,
} from "./redux/socket/socket.actions";

function App({ currentUser, socket, createSocket, onReceiveMessage }) {
  console.log(socket);
  useEffect(() => {
    if (currentUser === null) return;

    createSocket(currentUser._id);
    console.log("socket has been created");

    return () => closeSocket();
  }, [createSocket, currentUser]);

  useEffect(() => {
    if (socket === null) return;

    onReceiveMessage();

    return () => socket.off("receive-message");
  }, [socket, onReceiveMessage]);

  return (
    <div className="AppContainer">
      <SuccessMessage id="success-message"></SuccessMessage>
      <ErrorMessage id="error-message"></ErrorMessage>
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
        <Route path="/about" render={About} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  socket: state.socket.socket,
});

const mapDispatchToProps = (dispatch) => ({
  createSocket: (id) => dispatch(createSocket(id)),
  onReceiveMessage: () => dispatch(onReceiveMessage()),
  closeSocket: () => dispatch(closeSocket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
