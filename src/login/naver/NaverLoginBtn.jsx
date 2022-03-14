import { useEffect } from 'react';
import { LoginAndReturnMain } from '../../utils/LoginUtils';

const NaverLoginBtn = () => {
  useEffect(() => {
    // Naver
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000/loginCallback/",
      isPopup: true,
      loginButton: { color: 'green', type: 3, height: '48' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();

    window.naverLoginCallback = async (access_token) => {
      LoginAndReturnMain(access_token, 'naver');
    }
  }, []);

  return (
    <div id='naverIdLogin' />
  );
}

export default NaverLoginBtn
