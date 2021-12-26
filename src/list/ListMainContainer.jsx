import { useEffect, useState } from 'react';
import { IsLogin } from '../utils/LoginUtils';
import { ReturnToMainPage } from '../utils/CommonUtils';
import ListMainView from './ListMainView.jsx';
import NavbarContainer from '../navbar/NavbarContainer';
import ListManageContainer from './ListManageContainer';
import ListTableContainer from './ListTableContainer';

const ListMainContainer = () => {
  const [login, SetLogin] = useState(false);
  useEffect(() => {
    if (!IsLogin()) {
      alert('로그인이 필요한 서비스입니다.');
      ReturnToMainPage();
      return;
    }
    SetLogin(true);
  }, []);

  return <ListMainView
    navbarContainer={<NavbarContainer />}
    listManageContainer={<ListManageContainer />}
    listTableContainer={<ListTableContainer />}
    login={login}
  />;
}

export default ListMainContainer;
