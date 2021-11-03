import { useEffect, useCallback } from 'react';

const JAVASCRIPT_KEY = 'bdecedb6168050306415a2fe6b8be7c0';

const LoginMain = () => {
  useEffect(() => {
    // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
    window.Kakao.init(JAVASCRIPT_KEY);
    // SDK 초기화 여부를 판단합니다.
    console.log(window.Kakao.isInitialized());
  }, []);

  const loginWithKakao = useCallback(() => {
    window.Kakao.Auth.login({
      success: async function (authObj) {
        let postResponse;
        try {
          postResponse = await fetch('http://127.0.0.1:8000/kakao_api/', {
            method: 'POST',
            headers: {
              'Authorization': authObj.access_token
            }
          });
        } catch (err) {
          alert('fail to connet server');
          return;
        }
        let post;
        try {
          post = await postResponse.json();
        } catch (err) {
          alert('fail to read json');
          return;
        }

        localStorage.setItem('share-meal-token', post.access_token);
        window.location.replace("./");
      },
      fail: function (err) {
        alert(JSON.stringify(err))
      },
    })
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
      <p>
        로그인
      </p>
      <a onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
        />
      </a>
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
    </header >
  );
}

export default LoginMain;