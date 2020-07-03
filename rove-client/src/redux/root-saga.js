import { all, call } from "redux-saga/effects";

import userSaga from "./user/user.sagas";
import userCollectionSaga from "./user-collection/user-collection.sagas";

export default function* rootSaga() {
  yield all([call(userSaga), call(userCollectionSaga)]);
}
