import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { StyledUserMenu } from "./user-menu.styles";
import './user-menu.styles';

import { userLogoutSuccess } from "../../redux/user/user.actions";
const UserMenu = ({ userLogoutSuccess }) => {
  const toggleMenu = () => {
    const userMenu = document.getElementById("user-menu");
    const child = userMenu.childNodes[0];
    if(userMenu.classList.contains("user-menu-active")){
      child.style.display = "none";
      userMenu.classList.remove("user-menu-active");
    }
    else {
      child.style.display = "block";
      userMenu.classList.add("user-menu-active");
    }
  }

  return (
    <StyledUserMenu id="user-menu" onClick={toggleMenu}>
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
