import { useCallback, useEffect, useState } from 'react';
import { Logout } from '../utils/LoginUtils';
import { GetUserInfo } from '../utils/LoginUtils';
import ProfileBtnView from './ProfileBtnView';

const ProfileBtnContainer = () => {
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');

  const onClickMypage = useCallback(() => {
    alert('아직 그런거 없다..');
  }, []);

  const onClickLogout = useCallback(() => {
    Logout();
    setUserName('');
    setUserID('');
  }, []);

  const fetchUserInfoAPI = useCallback(async () => {
    const userInfo = await GetUserInfo();
    if (!userInfo) {
      setUserName('');
      setUserID('');
      return;
    }
    setUserName(userInfo.nickName);
    setUserID(userInfo.user_id);
  }, [])

  useEffect(() => {
    fetchUserInfoAPI()
  }, [fetchUserInfoAPI])

  return <ProfileBtnView
    userName={userName}
    userID={userID}
    onClickMypage={onClickMypage}
    onClickLogout={onClickLogout}
  />;
}

export default ProfileBtnContainer;
