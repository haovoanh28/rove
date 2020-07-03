import { put, takeLatest, all, call } from "redux-saga/effects";

import axios from "axios";
import jwt from "jsonwebtoken";
import UserActionTypes from "./user.types";
import {
  userLoginSuccess,
  userLoginFailure,
  userSignupSuccess,
  userSignupFailure,
  userUpdateSuccess,
  userUpdateFailure,
  userUpdateAvatarSuccess,
  userUpdateAvatarFailure,
} from "./user.actions";

function* onUserLoginStart(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/users/login",
      data: action.payload,
    });
    console.log(response);
    const token = yield response.data.accessToken;
    const userInfo = yield jwt.decode(token);
    userInfo.token = token;
    yield put(userLoginSuccess(userInfo));
  } catch (err) {
    yield put(userLoginFailure(err));
  }
}

function* onUserSignupStart(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/users",
      data: action.payload,
    });
    const token = yield response.data.data.accessToken;
    const userInfo = yield jwt.decode(token);
    userInfo.token = token;
    yield put(userSignupSuccess(userInfo));
    yield console.log(response);
  } catch (err) {
    yield put(userSignupFailure(err));
  }
}

function* onUserUpdateStart(action) {
  try {
    const { _id, token, ...data } = action.payload;
    const response = yield axios({
      method: "PATCH",
      url: `http://localhost:8000/api/v1/users/${_id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
    yield put(userUpdateSuccess(response.data.data));
  } catch (err) {
    yield put(userUpdateFailure(err));
  }
}

function* onUserUpdateAvatarStart(action) {
  const { _id, token, formData } = action.payload;

  try {
    const response = yield axios({
      method: "PATCH",
      url: `http://localhost:8000/api/v1/users/${_id}/avatar`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    });

    yield put(userUpdateAvatarSuccess(response.data.data));
  } catch (err) {
    yield put(userUpdateAvatarFailure(err));
  }
}

function* watchUserLoginStart() {
  yield takeLatest(UserActionTypes.USER_LOGIN_START, onUserLoginStart);
}

function* watchUserSignupStart() {
  yield takeLatest(UserActionTypes.USER_SIGNUP_START, onUserSignupStart);
}

function* watchUserUpdateStart() {
  yield takeLatest(UserActionTypes.USER_UPDATE_START, onUserUpdateStart);
}

function* watchUserUpdateAvatarStart() {
  yield takeLatest(
    UserActionTypes.USER_UPDATE_AVATAR_START,
    onUserUpdateAvatarStart
  );
}

function* userSaga() {
  yield all([
    call(watchUserLoginStart),
    call(watchUserSignupStart),
    call(watchUserUpdateStart),
    call(watchUserUpdateAvatarStart)
  ]);
}

export default userSaga;
