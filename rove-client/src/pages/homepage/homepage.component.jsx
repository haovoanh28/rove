import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchUserCollectionStart } from "../../redux/user-collection/user-collection.action";
import { HomePageContainer, Home } from "./hompage.styles";

import LogIn from "./../../components/log-in-form/log-in.component";
import UserCardsCollection from "../user-cards-collection/user-cards-collection.component";
import Spinner from "../../components/spinner/spinner.component";

const HomePage = ({
  currentUser,
  userCollection,
  fetchUserCollectionStart,
}) => {
  useEffect(() => {
    if (currentUser && !userCollection) {
      fetchUserCollectionStart(currentUser.token);
    }
  }, [currentUser, fetchUserCollectionStart, userCollection]);

  return (
    <>
      <HomePageContainer>
        {currentUser ? (
          <>
            {userCollection ? (
              <Route exact path="/" component={UserCardsCollection} />
            ) : (
              <div
                style={{
                  height: "90vh",
                }}
              >
                <Spinner />
              </div>
            )}
          </>
        ) : (
          <>
            <Home>
              <div className="slogan_container">
                <p className="slogan">DON'T</p>
                <p className="slogan">BE</p>
                <p className="slogan">SHY</p>
              </div>
            </Home>
            <LogIn />
          </>
        )}
      </HomePageContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  userCollection: state.userCollection.userCollection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserCollectionStart: (token) =>
    dispatch(fetchUserCollectionStart(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
