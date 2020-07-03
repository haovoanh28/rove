import React, { useState } from "react";
import { connect } from "react-redux";

import { changeContentType } from "../../redux/dashboard-content/dashboard-content.action";

import {
  StyledUserDashboard,
  UserDashboardTitle,
  TitleList,
  ListItem,
} from "./user-dashboard.styles";

import UserDashboardContent from "../../components/user-dashboard-content/user-dashboard-content.component";

const UserDashboard = ({ changeContentType }) => {
  const [visibleContent, setVisibleContent] = useState(1);

  const handleTypeChange = (e) => {
    const contentType = e.target.dataset.contentType;
    const targetVisibleContent = e.target.dataset.visibleContent;
    setVisibleContent(parseInt(targetVisibleContent));
    changeContentType(contentType);
  };

  return (
    <StyledUserDashboard>
      <UserDashboardTitle>
        <TitleList>
          <ListItem onClick={handleTypeChange} data-visible-content="1" data-content-type="about-me" isVisible={visibleContent === 1}>
            About me
          </ListItem>
          <ListItem onClick={handleTypeChange}   data-visible-content="2" data-content-type="photos" isVisible={visibleContent === 2}>
            Photo
          </ListItem>
          <ListItem onClick={handleTypeChange}   data-visible-content="3" data-content-type="message" isVisible={visibleContent === 3}>
            Message
          </ListItem>
        </TitleList>
      </UserDashboardTitle>
      <UserDashboardContent />
    </StyledUserDashboard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeContentType: (type) => dispatch(changeContentType(type)),
});

export default connect(null, mapDispatchToProps)(UserDashboard);
