import React from "react";
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { AboutMeContainer, TextContainer } from "./about-me.styles";

const AboutMe = (props) => {
  const {interests, introduction} = props.history.location.state.user;
  return (
    <AboutMeContainer>
      <TextContainer>
        <h3>Introduction : </h3> <p>{introduction} </p>
      </TextContainer>
      <TextContainer>
        <h3>Interests : </h3> <p>{interests} </p>
      </TextContainer>
    </AboutMeContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(withRouter(AboutMe));
