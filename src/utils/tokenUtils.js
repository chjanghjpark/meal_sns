import jwt_decode from "jwt-decode";

const SHARE_MEAL_ACCESS_TOKEN_KEY = 'share-meal-access-token';
const SHARE_MEAL_REFRESH_TOKEN_KEY = 'share-meal-refresh-token';

export const SetToken = (accessToken, refreshToken) => {
  localStorage.setItem(
    SHARE_MEAL_ACCESS_TOKEN_KEY,
    accessToken
  );

  const refreshDecode = jwt_decode(refreshToken);
  setCookie(SHARE_MEAL_REFRESH_TOKEN_KEY, refreshToken, new Date(refreshDecode.exp * 1000));
}

export const GetAccessToken = () => {
  return localStorage.getItem(SHARE_MEAL_ACCESS_TOKEN_KEY);
}

export const GetAccessTokenDecode = () => {
  const accessToken = GetAccessToken();
  if (!accessToken)
    return;

  return jwt_decode(accessToken);
}

export const GetRefreshToken = () => {
  return getCookie(SHARE_MEAL_REFRESH_TOKEN_KEY);
}

export const ClearToken = () => {
  localStorage.removeItem(SHARE_MEAL_ACCESS_TOKEN_KEY);
  removeCookie(SHARE_MEAL_REFRESH_TOKEN_KEY);
}

export const IsAccessTokenValid = () => {
  const accessToken = localStorage.getItem(SHARE_MEAL_ACCESS_TOKEN_KEY);
  if (!accessToken)
    return false;
  const accessDecode = jwt_decode(accessToken);
  return Date.now() < accessDecode.exp * 1000;
}

export const IsRefreshTokenValid = () => {
  const refreshToken = getCookie(SHARE_MEAL_REFRESH_TOKEN_KEY);
  return refreshToken != "";
}

const setCookie = (cname, cvalue, exdays) => {
  let expires = "expires=" + exdays.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const removeCookie = (cname) => {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}