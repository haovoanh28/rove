import dashBoardContentType from "./dashboard-content.types";

export const changeContentType = type => ({
  type: dashBoardContentType.USER_DASHBOARD_CONTENT_CHANGED,
  payload: type
});
