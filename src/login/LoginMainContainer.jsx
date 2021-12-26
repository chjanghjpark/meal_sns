import { useEffect, useState } from 'react';
import { ReturnToMainPage } from '../utils/CommonUtils';
import { IsLogin } from '../utils/LoginUtils';
import LoginMainView from './LoginMainView';
import KakaoLoginBtn from "./kakao/KakaoLoginBtn";
import NaverLoginBtn from "./naver/NaverLoginBtn";
import GoogleLoginBtn from "./google/GoogleLoginBtn";

const LoginMainContainer = () => {
  const [login, SetLogin] = useState(true);
  useEffect(() => {
    if (IsLogin()) {
      ReturnToMainPage();
      return;
    }
    SetLogin(false);
  }, []);

  return <LoginMainView
    kakaoLoginBtn={<KakaoLoginBtn />}
    naverLoginBtn={<NaverLoginBtn />}
    googleLoginBtn={<GoogleLoginBtn />}
    login={login}
  />;
}

export default LoginMainContainer;