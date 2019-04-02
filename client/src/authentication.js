import { userLoginSuccess } from "./actions/user.actions";

const AUTH_TOKE_KEY = "auth token";
const USER_KEY = "user";

export const initializePreviousToken = store => {
  const token = localStorage.getItem(AUTH_TOKE_KEY);
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  if (token) store.dispatch(userLoginSuccess(token, user));
};

export const storeToken = (token, user) => {
  localStorage.setItem(AUTH_TOKE_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearToken = () => {
  localStorage.removeItem(AUTH_TOKE_KEY);
  localStorage.removeItem(USER_KEY);
};
