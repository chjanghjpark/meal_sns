import { useEffect, useCallback } from 'react';
import { LoginAPI } from '../LoginAPI';

const KAKAO_JAVASCRIPT_KEY = 'bdecedb6168050306415a2fe6b8be7c0';

const KakaoLoginBtn = () => {
  useEffect(() => {
    // Kakao Init
    window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
  }, []);

  const loginWithKakao = useCallback(() => {
    window.Kakao.Auth.login({
      success: async function (authObj) {
        LoginAPI(authObj.access_token, 'kakao');
      },
      fail: function (err) {
        alert(JSON.stringify(err))
      },
    })
  }, []);

  return (
    <a
      style={{
        cursor: "pointer"
      }}
      onClick={loginWithKakao}>
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222" height="48"
      />
    </a>
  );
}

export default KakaoLoginBtn;
