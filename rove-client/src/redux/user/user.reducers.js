import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  successMessage: "",
  errMessage: "",
  isPending: false,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.USER_SIGNUP:
      return {
        ...currentState,
      };
    case userActionTypes.USER_LOGIN_SUCCESS:
    case userActionTypes.USER_SIGNUP_SUCCESS:
    case userActionTypes.USER_LOGOUT_SUCCESS:
    case userActionTypes.USER_UPDATE_SUCCESS:
    case userActionTypes.USER_UPDATE_AVATAR_SUCCESS:
    case userActionTypes.USER_ADD_PHOTO_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        isPending: false,
        successMessage: ""
      };
    case userActionTypes.USER_LOGIN_FAILURE:
    case userActionTypes.USER_SIGNUP_FAILURE:
    case userActionTypes.USER_LOGOUT_FAILURE:
    case userActionTypes.USER_UPDATE_FAILURE:
    case userActionTypes.USER_UPDATE_AVATAR_FAILURE:
    case userActionTypes.USER_ADD_PHOTO_FAILURE:
      return {
        ...currentState,
        errMessage: action.payload.response.data.message,
        isPending: false,
      };
    case userActionTypes.SET_PENDING_STATE:
      return {
        ...currentState,
        isPending: action.payload,
      };
    case userActionTypes.HIDE_ERROR_MESSAGE:
      return {
        ...currentState,
        errMessage: "",
      };
    default:
      return currentState;
  }
};

export default userReducer;
