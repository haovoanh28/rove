import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errMessage: "",
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
      return {
        ...currentState,
        currentUser: action.payload,
      };
    case userActionTypes.USER_LOGIN_FAILURE:
    case userActionTypes.USER_SIGNUP_FAILURE:
    case userActionTypes.USER_LOGOUT_FAILURE:
    case userActionTypes.USER_UPDATE_FAILURE:
    case userActionTypes.USER_UPDATE_AVATAR_FAILURE:
      return {
        ...currentState,
        errMessage: action.payload.response.data.message,
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
