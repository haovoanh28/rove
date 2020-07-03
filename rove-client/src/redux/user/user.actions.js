import userActionTypes from "./user.types";

export const userSignupStart = (data) => ({
  type: userActionTypes.USER_SIGNUP_START,
  payload: data,
});

export const userSignupSuccess = (user) => ({
  type: userActionTypes.USER_SIGNUP_SUCCESS,
  payload: user,
});

export const userSignupFailure = (err) => ({
  type: userActionTypes.USER_SIGNUP_FAILURE,
  payload: err,
});

export const userLoginStart = (data) => ({
  type: userActionTypes.USER_LOGIN_START,
  payload: data,
});

export const userLoginSuccess = (user) => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  payload: user,
});

export const userLoginFailure = (err) => ({
  type: userActionTypes.USER_LOGIN_FAILURE,
  payload: err,
});

export const userLogoutStart = () => ({
  type: userActionTypes.USER_SIGNUP_START,
});

export const userLogoutSuccess = () => ({
  type: userActionTypes.USER_LOGOUT_SUCCESS,
  payload: null,
});

export const userLogoutFailure = () => ({
  type: userActionTypes.USER_LOGIN_FAILURE,
});

export const userUpdateStart = (data) => ({
  type: userActionTypes.USER_UPDATE_START,
  payload: data,
});

export const userUpdateSuccess = (user) => ({
  type: userActionTypes.USER_UPDATE_SUCCESS,
  payload: user,
});

export const userUpdateFailure = (err) => ({
  type: userActionTypes.USER_UPDATE_FAILURE,
  payload: err,
});

export const userUpdateAvatarStart = (data) => ({
  type: userActionTypes.USER_UPDATE_AVATAR_START,
  payload: data,
});

export const userUpdateAvatarSuccess = (user) => ({
  type: userActionTypes.USER_UPDATE_AVATAR_SUCCESS,
  payload: user,
});

export const userUpdateAvatarFailure = (err) => ({
  type: userActionTypes.USER_UPDATE_AVATAR_FAILURE,
  payload: err,
});

export const hideErrorMessage = () => ({
  type: userActionTypes.HIDE_ERROR_MESSAGE,
});
