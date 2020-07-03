import userCollectionActionTypes from "./user-collection.types";

const INITIAL_STATE = {
  userCollection: null,
  errMessage: "",
};

const userCollectionReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case userCollectionActionTypes.FETCH_USER_COLLECTION_SUCCESS:
      return {
        ...currentState,
        userCollection: action.payload,
      };
    case userCollectionActionTypes.FETCH_USER_COLLECTION_FAILURE:
      return {
        ...currentState,
        errMessage: action.payload,
      };
    default:
      return currentState;
  }
};

export default userCollectionReducer;
