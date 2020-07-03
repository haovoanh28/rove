import React from "react";
import { connect } from "react-redux";

import { StyledUserCardsCollection } from "./user-cards-collection.styles";

import UserCardContainer from "../../components/user-card-container/user-card-container.component";

const UserCardsCollection = ({ userCollection }) => {
  return (
    <StyledUserCardsCollection>
      {userCollection.map((user) => (
        <UserCardContainer key={user._id} {...user} />
      ))}
    </StyledUserCardsCollection>
  );
};

const mapStateToProps = (state) => ({
  userCollection: state.userCollection.userCollection,
});

export default connect(mapStateToProps)(UserCardsCollection);
