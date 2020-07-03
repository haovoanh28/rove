import React from "react";
import { connect } from "react-redux";

import {UserDashboardContentContainer} from './user-dashboard-content.styles';

import AboutMe from '../about-me/about-me.component';
import Photos from '../photos/photos.component';

const UserDashboardContent = ({ contentType }) => {
  return (
    <UserDashboardContentContainer>
      {contentType === "about-me" ? (
        <AboutMe />
      ) : contentType === "photos" ? (
        <Photos />
      ) : contentType === "message" ? (
        <h1>Message</h1>
      ) : null}
    </UserDashboardContentContainer>
  );
};

const mapStateToProps = state => ({
  contentType: state.dashBoardContent.contentType
});

export default connect(mapStateToProps)(UserDashboardContent);
