import React from "react";
import { connect } from "react-redux";

import { UserDashboardContentContainer } from "./user-dashboard-content.styles";

import AboutMe from "../about-me/about-me.component";
import Photos from "../photos/photos.component";
import Message from "../message/message.component";

const UserDashboardContent = ({ contentType }) => {
  return (
    <UserDashboardContentContainer
      isMessageComponent={contentType === "message"}
    >
      {contentType === "about-me" ? (
        <AboutMe />
      ) : contentType === "photos" ? (
        <Photos />
      ) : contentType === "message" ? (
        <Message />
      ) : null}
    </UserDashboardContentContainer>
  );
};

const mapStateToProps = (state) => ({
  contentType: state.dashBoardContent.contentType,
});

export default connect(mapStateToProps)(UserDashboardContent);
