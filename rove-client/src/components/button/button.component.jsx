import React from "react";

import { PrimaryButton, WhiteButton } from "./button.styles";

const Button = ({ children, primary , ...otherProps}) => {
  return (
      primary ? (
        <PrimaryButton {...otherProps}>{children}</PrimaryButton>
      ) : (
        <WhiteButton {...otherProps}>{children}</WhiteButton>
      )
  );
};

export default Button;
