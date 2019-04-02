import { USER_LOADED } from "../actions/users.actions";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOADED:
      return action.payload;
    default:
      return state;
  }
};
