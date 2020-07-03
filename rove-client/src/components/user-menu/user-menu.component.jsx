import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { StyledUserMenu } from "./user-menu.styles";

import { userLogoutSuccess } from "../../redux/user/user.actions";
const UserMenu = ({ userLogoutSuccess }) => {
  return (
    <StyledUserMenu>
      <div>
        <Link to="/edit">Edit profile ...</Link>
        <Link to="#" onClick={userLogoutSuccess}>
          Logout &larr;
        </Link>
      </div>
    </StyledUserMenu>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userLogoutSuccess: () => dispatch(userLogoutSuccess()),
});

export default connect(null, mapDispatchToProps)(UserMenu);
