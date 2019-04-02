import {
  USER_LOADED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../actions/user.actions";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOADED:
      return { ...state, ...action.payload };

    case USER_LOGIN_SUCCESS:
      return {
        isAuthenticated: !!action.payload.token,
        name: formatUserName(action.payload.user),
        ...action.payload.user
      };

    case USER_LOGOUT:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }
};

const formatUserName = user => user.givenName + " " + user.familyName;
