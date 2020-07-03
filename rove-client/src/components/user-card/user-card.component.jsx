import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  StyledUserCard,
  ImageContainer,
  NameAndGender,
} from "./user-card.styles";

import { ReactComponent as FemaleIcon } from "../../assets/images/female.svg";
import { ReactComponent as MaleIcon } from "../../assets/images/male.svg";
import Button from "../button/button.component";

import { changeContentType } from "../../redux/dashboard-content/dashboard-content.action";

const UserCard = ({
  avatar,
  firstName,
  lastName,
  gender,
  history,
  changeContentType,
  ...otherProps
}) => {
  const handleClick = (e) => {
    const { location, match, staticContext, _v, ...otherUserProps } = otherProps;
    console.log(otherUserProps);
    const user = {
      avatar,
      firstName,
      lastName,
      gender,
      ...otherUserProps,
    };
     console.log(user);
    history.push({
      pathname: "/communication",
      state : {user}
    });
    changeContentType("about-me");
  };

  return (
    <StyledUserCard>
      <ImageContainer>
        <img src={avatar} alt="user avatar" />
      </ImageContainer>
      <NameAndGender>
        <p>
          {firstName} {lastName}
        </p>
        <span>{gender === "Female" ? <FemaleIcon /> : <MaleIcon />}</span>
      </NameAndGender>
      <Button primary as="a" onClick={handleClick}>
        Connect now
      </Button>
    </StyledUserCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeContentType: (payload) => dispatch(changeContentType(payload)),
});

export default connect(null, mapDispatchToProps)(withRouter(UserCard));
