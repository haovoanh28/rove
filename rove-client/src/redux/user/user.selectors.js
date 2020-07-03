import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
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
