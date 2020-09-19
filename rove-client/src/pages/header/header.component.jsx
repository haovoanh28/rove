import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Brand, Nav, User, StyledMenuIcon } from "./header.styles";
import "./header.styles.css";

import { ReactComponent as BrandLogo } from "../../assets/icons/brand_logo.svg";
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

  const handleOnClick = (e) => {
    if (document.getElementById("login_form") === null) return;
    document.getElementById("login_form").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav>
        <StyledMenuIcon onClick={toggleMenu} />
        <Brand id="nav">
          <li id="brand_logo">
            <Link to="/">
              <BrandLogo />
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Term</Link>
          </li>
        </Brand>

        <Link to="/">
          <BrandLogo className="sub-logo" />
        </Link>

        {currentUser ? (
          <User avatar={currentUser.avatar}>
            <li id="user-first-name">{currentUser.firstName}</li>
            <li>
              <div className="avatar">
                <UserMenu />
              </div>
            </li>
          </User>
        ) : (
          <ul>
            <li>
              <Link to="/" onClick={handleOnClick}>
                Log in
              </Link>
            </li>
            {/* <li>
              <Link to="/signup">Sign up</Link>
            </li> */}
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
