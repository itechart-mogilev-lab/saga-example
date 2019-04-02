import {
  USER_LOADED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from "../actions/user.actions";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOADED: {
      const user = action.payload;
      user.orders.forEach(o => (o.date = new Date(o.date)));

      return { ...state, ...user, name: formatUserName(user) };
    }
    case USER_LOGIN_SUCCESS: {
      const user = action.payload.user;
      user.orders = user.orders || [];

      return {
        isAuthenticated: !!action.payload.token,
        name: formatUserName(action.payload.user),
        ...action.payload.user
      };
    }
    case USER_LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }
};

const formatUserName = user => user.givenName + " " + user.familyName;
