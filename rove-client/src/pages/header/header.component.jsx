import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Brand, Nav, User } from "./header.styles";

import UserMenu from '../../components/user-menu/user-menu.component';

const Header = ({ currentUser, userLogoutSuccess }) => {
  return (
    <Nav>
      <Brand>
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
          <li>{currentUser.firstName}</li>
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
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
