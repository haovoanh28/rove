import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// Lay du lieu tra ve tu input selectors va result func se lam viec dua tren du lieu do

export const selectCurrentUser = createSelector(
  [selectUser], // input selectors
  (user) => user.currentUser // result func
);

export const selectPhotos = createSelector(
  [selectCurrentUser],
  (user) => user.photos
);

export const selectAvatar = createSelector(
  [selectCurrentUser],
  (user) => user.avatar
);

export const selectMessageError = createSelector(
  [selectUser],
  (user) => user.errMessage
);
