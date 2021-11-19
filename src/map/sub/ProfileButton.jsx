import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import jwt_decode from "jwt-decode";
import ConvertNameToRGB from '../../utils/utils';

const ProfileButton = () => {
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');

  useEffect(() => {
    try {
      let token = localStorage.getItem('share-meal-token') || '';
      if (token != '') {
        var decoded = jwt_decode(token);
        setUserName(decoded.nickname);
        setUserID(decoded.user_id);
      }
    } catch (err) {
      alert('fail to decode jwt');
      setUserName('');
      setUserID('');
    }
  }, []);

  return (
    <>
      {
        userName === '' || userID === ''
          ?
          <Button variant="outline-success" href="./login">Login</Button>
          : <div style={{
            width: "38px",
            height: "38px",
            lineHeight: "38px",
            borderRadius: "50%",
            fontSize: "15px",
            color: "#fff",
            textAlign: "center",
            background: ConvertNameToRGB(userID),
          }}>{userName[0]}</div>
      }
    </>
  );
}

export default ProfileButton;