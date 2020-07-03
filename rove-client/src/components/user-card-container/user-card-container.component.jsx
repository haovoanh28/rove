import React from "react";

import { StyledUserCardContainer } from "./user-card-container.styles";

import UserCard from "../user-card/user-card.component";

const UserCardContainer = props => {
  return (
    <StyledUserCardContainer>
      <UserCard {...props}></UserCard>
    </StyledUserCardContainer>
  );
};

export default UserCardContainer;
