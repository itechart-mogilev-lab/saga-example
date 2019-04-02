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

export const USER_LOGOUT = "user logout";
export const userLogout = () => ({
  type: USER_LOGOUT
});
