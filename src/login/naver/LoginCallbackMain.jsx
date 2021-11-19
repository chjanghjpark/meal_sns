import { useEffect } from 'react';

const LoginCallbackMain = () => {
  useEffect(() => {
    const location = window.location.href.split("=")[1];
    const access_token = location.split("&")[0];
    window.opener.naverLoginCallback(access_token);
    window.close();

  }, []);


  return (
    <>
    </>
  );
}

export default LoginCallbackMain;