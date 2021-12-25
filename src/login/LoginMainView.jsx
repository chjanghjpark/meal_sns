import KakaoLoginBtn from "./kakao/KakaoLoginBtn";
import NaverLoginBtn from "./naver/NaverLoginBtn";
import GoogleLoginBtn from "./google/GoogleLoginBtn";

const LoginMainView = ({ login }) => {
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
        !login &&
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

export default LoginMainView;