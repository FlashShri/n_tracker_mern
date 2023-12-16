export function isAutheticated() {
  return getToken() ? true : false;
}

export function getToken() {
  return localStorage.getItem("token");
}
