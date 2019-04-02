export const USER_LOADED = "user loaded";
export const userLoaded = data => ({
  type: USER_LOADED,
  payload: data
});

export const USER_LOGIN_SUCCESS = "user login success";
export const userLoginSuccess = (token, user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: { token, user }
});

export const LOGOUT_USER = "logout user";
export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const LOGIN_USER = "login user";
export const loginUser = (login, password) => ({
  type: LOGIN_USER,
  payload: { login, password }
});

export const LOAD_USER = "load user";
export const loadUser = () => ({
  type: LOAD_USER
});

export const USER_LOGOUT_SUCCESS = "user logout success";
export const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS
});
