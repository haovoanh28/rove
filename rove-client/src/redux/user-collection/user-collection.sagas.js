import { takeLatest, call, all, put } from "redux-saga/effects";
import axios from "axios";

import userCollectionActionTypes from "./user-collection.types";
import {
  fetchUserCollectionSuccess,
  fetchUserCollectionFailure,
} from "./user-collection.action";

function* onFetchUserCollectionStart(action) {
  try {
    const response = yield axios({
      method: "GET",
      url: "https://peaceful-crag-36099.herokuapp.com/api/v1/users",
      headers: {
        Authorization: `Bearer ${action.payload}`,
      },
    });
    const userCollection = response.data.data.users;
    yield put(fetchUserCollectionSuccess(userCollection));
  } catch (err) {
    yield put(fetchUserCollectionFailure(err));
  }
}

function* watchFetchUserCollectionStart() {
  yield takeLatest(
    userCollectionActionTypes.FETCH_USER_COLLECTION_START,
    onFetchUserCollectionStart
  );
}

function* userCollectionSaga() {
  yield all([call(watchFetchUserCollectionStart)]);
}

export default userCollectionSaga;
