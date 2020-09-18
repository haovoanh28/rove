import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutSuccess } from "../../redux/user/user.actions";

import { StyledUserMenu } from "./user-menu.styles";
import "./user-menu.styles";

import { AiOutlineEdit } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";

const UserMenu = ({ userLogoutSuccess }) => {
  const toggleMenu = () => {
    const userMenu = document.getElementById("user-menu");
    const child = userMenu.childNodes[0];
    if (userMenu.classList.contains("user-menu-active")) {
      child.style.display = "none";
      userMenu.classList.remove("user-menu-active");
    } else {
      child.style.display = "block";
      userMenu.classList.add("user-menu-active");
    }
  };

  return (
    <StyledUserMenu id="user-menu" onClick={toggleMenu}>
      <div>
        <Link to="/edit">
          <span>Edit profile</span> 
          <AiOutlineEdit />
        </Link>
        <Link to="#" onClick={userLogoutSuccess}>
          <span>Logout</span>
          <RiLogoutCircleRLine />
        </Link>
      </div>
    </StyledUserMenu>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userLogoutSuccess: () => dispatch(userLogoutSuccess()),
});

export default connect(null, mapDispatchToProps)(UserMenu);
