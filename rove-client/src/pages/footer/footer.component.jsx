import React from "react";

import {
  FooterContainer,
  ContactMe,
  Technologies,
  FindMeOn,
} from "./footer.styles";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactMe>
        <p>Contact me</p>
        <ul>
          <li>haovoanh28@gmail.com</li>
          <li>haova999@gmail.com</li>
        </ul>
      </ContactMe>
      <FindMeOn>
        <p>Find me on</p>
        <div className="footer_icons">
          <AiFillFacebook />
          <AiFillTwitterSquare />
          <AiFillLinkedin />
        </div>
      </FindMeOn>
      <Technologies>
        <p>Technologies used</p>
        <ul>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>Socket.io</li>
        </ul>
      </Technologies>
    </FooterContainer>
  );
};

export default Footer;
