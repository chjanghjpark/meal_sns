import { useEffect, useState } from "react";
import KakaoLoginBtn from "./kakao/KakaoLoginBtn";
import NaverLoginBtn from "./naver/NaverLoginBtn";
import GoogleLoginBtn from "./google/GoogleLoginBtn";
import { ReturnToMainPage } from "../utils/CommonUtils";
import { IsLogin } from "../utils/LoginUtils";

const LoginMain = () => {
  const [isLogin, SetIsLogin] = useState(true);
  useEffect(() => {
    if (IsLogin()) {
      ReturnToMainPage();
      return;
    }
    SetIsLogin(false);
  }, []);

  return (
    <header style={{
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    }}>
      {
        !isLogin &&
        <>
          <p>로그인</p>
          <KakaoLoginBtn />
          <NaverLoginBtn />
          <GoogleLoginBtn />
          <a
            href="./"
            style={{
              textDecoration: "none",
              color: "white",
            }}>
            <p>
              돌아가기
            </p>
          </a>
        </>
      }
    </header >
  );
}

export default LoginMain;