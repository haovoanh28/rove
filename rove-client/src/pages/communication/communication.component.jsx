import React from "react";
import { withRouter } from "react-router-dom";

import {
  CommunicationContainer,
  UserInfomations,
  ImageContainer,
} from "./communication.styles";

import InfoContainer from "../../components/infomation-container/info-container.component";
import UserDashboard from "../user-dashboard/user-dashboard.component";

const Communication = (props) => {
  const {
    avatar,
    firstName,
    lastName,
    age,
    gender,
    nation,
  } = props.history.location.state.user;
  return (
    <CommunicationContainer>
      <UserInfomations>
        <ImageContainer>
          <img src={avatar} alt="user avatar" />
        </ImageContainer>
        <InfoContainer
          infoName="Name"
          infoContent={firstName + " " + lastName}
        ></InfoContainer>
        <InfoContainer infoName="Age" infoContent={age} />
        <InfoContainer infoName="Gender" infoContent={gender} />
        <InfoContainer infoName="Nation" infoContent={nation} />
      </UserInfomations>
      <UserDashboard />
    </CommunicationContainer>
  );
};

export default withRouter(Communication);
