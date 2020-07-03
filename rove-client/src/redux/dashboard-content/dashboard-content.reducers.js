import dashBoardContentType from "./dashboard-content.types";

const INITIAL_STATE = {
  contentType: "about-me"
};

const userDashboardReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case dashBoardContentType.USER_DASHBOARD_CONTENT_CHANGED :
            return {
                ...currentState,
                contentType : action.payload
            }
            default : 
            return currentState;
    }
};

export default userDashboardReducer;
