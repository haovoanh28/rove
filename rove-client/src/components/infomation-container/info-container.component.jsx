import React from "react";

import { StyledInfoContainer } from "./info-container.styles";

const InfoContainer = ({ isEditable, infoName, infoContent}) => {
  return (
    <>
      {isEditable ? (
        <StyledInfoContainer>
          <h4>{infoName} : </h4>
          <p>{infoContent}</p>
        </StyledInfoContainer>
      ) : (
        <StyledInfoContainer>
          <h4>{infoName} : </h4>
          <p>{infoContent}</p>
        </StyledInfoContainer>
      )}
    </>
  );
};

export default InfoContainer;
