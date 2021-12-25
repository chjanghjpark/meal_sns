import { GetTokenAPI, RefreshAccessTokenAPI } from "./api/LoginAPI";
import { ReturnToMainPage } from "./CommonUtils";
import { SetToken, GetRefreshToken, GetAccessTokenDecode, ClearToken, IsAccessTokenValid, IsRefreshTokenValid } from "./TokenUtils";

export const Login = async (snsAccessToken, platform) => {
  const retVal = await GetTokenAPI(snsAccessToken, platform);
  if (!retVal)
    return false;

  SetToken(retVal.accessToken, retVal.refreshToken);
  return true;
}

export const LoginAndReturnMain = async (snsAccessToken, platform) => {
  const bSuccess = await Login(snsAccessToken, platform);
  if (!bSuccess)
    return;

  ReturnToMainPage();
}

export const Logout = () => {
  ClearToken();
}

export const IsLogin = () => {
  return (IsAccessTokenValid() && IsRefreshTokenValid());
}

export const GetUserInfo = async () => {
  let accessDecode = await getValidAccessDecode();
  if (!accessDecode) {
    ClearToken();
    return;
  }

  return {
    nickName: accessDecode.nickname,
    user_id: accessDecode.user_id,
  };
}

const getValidAccessDecode = async () => {
  try {
    if (!IsAccessTokenValid()) {
      if (!IsRefreshTokenValid())
        return;

      const refreshToken = GetRefreshToken();
      const bRefreshSuccess = await RefreshAccessTokenAPI(refreshToken);
      if (!bRefreshSuccess)
        return;
    }

    let accessDecode = GetAccessTokenDecode();
    if (!accessDecode)
      return;

    return accessDecode;
  } catch (err) {
    return;
  }
}