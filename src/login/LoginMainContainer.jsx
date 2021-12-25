import { useEffect, useState } from 'react';
import { ReturnToMainPage } from '../utils/CommonUtils';
import { IsLogin } from '../utils/LoginUtils';
import LoginMainView from './LoginMainView';

const LoginMainContainer = () => {
  const [login, SetLogin] = useState(true);
  useEffect(() => {
    if (IsLogin()) {
      ReturnToMainPage();
      return;
    }
    SetLogin(false);
  }, []);

  return <LoginMainView login={login} />;
}

export default LoginMainContainer;