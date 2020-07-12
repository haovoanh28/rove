import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Brand, Nav, User, StyledMenuIcon } from "./header.styles";
import "./header.styles.css";

import UserMenu from "../../components/user-menu/user-menu.component";

const Header = ({ currentUser, userLogoutSuccess }) => {
  const toggleMenu = () => {
    const nav = document.getElementById("nav");
    if (!nav.classList.contains("nav-responsive")) {
      nav.classList.add("nav-responsive");
    } else {
      nav.classList.remove("nav-responsive");
    }
  };

  return (
    <>
      <Nav>
        <StyledMenuIcon onClick={toggleMenu} />
        <Brand id="nav">
          <li>
            <Link to="/">Rove</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Term</li>
        </Brand>

        {currentUser ? (
          <User avatar={currentUser.avatar}>
            <li>
              <div className="avatar">
                <UserMenu />
              </div>
            </li>
            <li id="user-first-name">{currentUser.firstName}</li>
          </User>
        ) : (
          <ul>
            <li>
              <Link to="/">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        )}
      </Nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
