export const LOGIN = {
  success: "ON_LOGIN",
  logout: "LOGOUT"
};

export const loginSuccess = data => ({
  type: LOGIN.success,
  data
});

export const loginFetchEnd = data => ({
  type: LOGIN.logout,
  data
});
