import { useEffect, useCallback } from 'react';

const KAKAO_JAVASCRIPT_KEY = 'bdecedb6168050306415a2fe6b8be7c0';
const NAVER_CLIENT_ID = '9jsLZgdidzjbT3DirLSx';

const LoginMain = () => {
  useEffect(() => {
    // Kakao Init
    window.Kakao.init(KAKAO_JAVASCRIPT_KEY);

    // Naver
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000/loginCallback/",
      isPopup: true,
      loginButton: { color: 'green', type: 3, height: '48' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();

    window.naverLoginCallback = async (access_token) => {
      let postResponse;
      try {
        postResponse = await fetch('http://127.0.0.1:8000/naver_api/', {
          method: 'POST',
          headers: {
            'Authorization': access_token
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
    }
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

        localStorage.setItem('share-meal-token', post.jwt);
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
          width="222" height="48"
        />
      </a>
      <div id='naverIdLogin' />
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