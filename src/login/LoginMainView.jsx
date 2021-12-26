const LoginMainView = ({ kakaoLoginBtn, naverLoginBtn, googleLoginBtn, login }) => {
  return (
    !login &&
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
      <>
        <p>로그인</p>
        {kakaoLoginBtn}
        {naverLoginBtn}
        {googleLoginBtn}
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
    </header >
  );
}

export default LoginMainView;