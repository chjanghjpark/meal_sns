import { useEffect, useCallback } from 'react';
import styled from 'styled-components';

const JAVASCRIPT_KEY = 'bdecedb6168050306415a2fe6b8be7c0';
const REST_API_KEY = '84c5ac72fd225ac37b53929946ca6a6a';
const REDIRECT_URI = 'http://localhost:3000/';

const { Kakao } = window;

const LoginMain = () => {
  useEffect(() => {
    // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init(JAVASCRIPT_KEY);
    // SDK 초기화 여부를 판단합니다.
    console.log(Kakao.isInitialized());
  }, []);

  const loginWithKakao = useCallback(() => {
    Kakao.Auth.login({
      success: function (authObj) {
        alert(JSON.stringify(authObj))

        // REST API : GET access token ★★★★★★★★★★★★★★★★★★★

        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          }
        });

        // Kakao.Auth.logout(function () {
        //   alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken())
        // })

        // Kakao.API.request({
        //   url: '/v1/user/unlink',
        //   success: function (res) {
        //     alert('success: ' + JSON.stringify(res))
        //   },
        //   fail: function (err) {
        //     alert('fail: ' + JSON.stringify(err))
        //   },
        // })
      },
      fail: function (err) {
        alert(JSON.stringify(err))
      },
    })
  }, []);


  return (
    <header className="App-header">
      <p>
        로그인
      </p>
      <a onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
        />
      </a>
      <p>
        돌아가기
      </p>
    </header>
  );
}

const KaKaoBtn = styled.button`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default LoginMain;