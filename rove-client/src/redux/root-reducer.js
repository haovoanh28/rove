import { combineReducers } from "redux";

import userReducer from "./user/user.reducers";
import dashBoardContentReducer from './dashboard-content/dashboard-content.reducers';
import userCollectionReducer from './user-collection/user-collection.reducers';

const rootReducer = combineReducers({
  user: userReducer,
  dashBoardContent : dashBoardContentReducer,
  userCollection : userCollectionReducer
});

export default rootReducer;
