import jwt_decode from "jwt-decode";

export function onLogin(accessToken, refreshToken) {
  localStorage.setItem(
    'share-meal-access-token',
    accessToken
  );

  const refreshDecode = jwt_decode(refreshToken);
  setCookie('share-meal-refresh-token', refreshToken, new Date(refreshDecode.exp * 1000));
}

export function onLogout() {
  localStorage.removeItem('share-meal-access-token');
  removeCookie('share-meal-refresh-token');
}

export async function getUserInfo() {
  try {
    const decode = localStorage.getItem("share-meal-access-token");
    const expireAt = jwt_decode(decode);
    const refreshToken = getCookie("share-meal-refresh-token");
    if (Date.now() >= expireAt * 1000 && refreshToken != "") {
      // get access token by refresh token! & backend need to expired token too!
      // localStorage.setItem(
      //   'share-meal-access-token',
      //   accessToken
      // );
    }

    let token = localStorage.getItem('share-meal-access-token');
    if (!token) {
      return {
        nickName: '',
        user_id: '',
      };
    }

    var decoded = jwt_decode(token);
    return {
      nickName: decoded.nickname,
      user_id: decoded.user_id,
    };
  } catch (err) {
    return {
      nickName: '',
      user_id: '',
    };
  }
}

function setCookie(cname, cvalue, exdays) {
  let expires = "expires=" + exdays.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
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

function removeCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}