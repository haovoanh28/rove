import React, { useState } from "react";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { userUpdateStart } from "../../redux/user/user.actions";

import { StyledEditProfileForm } from "./edit-profile-form.styles";

import BriefInfo from "../brief-info/brief-info.component";
import IntroAndInterests from "../intro-and-interests/intro-and-interests.component";
const EditProfileForm = ({ currentUser, userUpdateStart }) => {
  const {
    firstName,
    lastName,
    nation,
    introduction,
    interests,
    _id,
    token
  } = currentUser;
  const [state, setState] = useState({
    firstName,
    lastName,
    nation,
    introduction,
    interests,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {...state, _id, token};
    userUpdateStart(data);
  };

  return (
    <StyledEditProfileForm onSubmit={handleSubmit}>
      <BriefInfo
        firstName={state.firstName}
        lastName={state.lastName}
        nation={state.nation}
        handleChange={handleChange}
      />
      <IntroAndInterests
        introduction={state.introduction}
        interests={state.interests}
        handleChange={handleChange}
      />
    </StyledEditProfileForm>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  userUpdateStart: (data) => dispatch(userUpdateStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
