import { useCallback, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import { OverlayTrigger, Popover, ListGroup } from "react-bootstrap";
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

  const onClickMypage = useCallback(() => {
    alert('아직 그런거 없다..');
  }, []);

  const onClickLogout = useCallback(() => {
    localStorage.removeItem('share-meal-token');
    setUserName('');
    setUserID('');
  }, []);

  return (
    <>
      {
        userName === '' || userID === ''
          ?
          <Button variant="outline-success" href="./login">Login</Button>
          :
          <OverlayTrigger
            placement="bottom"
            trigger="click"
            overlay={
              <Popover id="popover-basic">
                <Popover.Header as="h3">{userName} 님</Popover.Header>
                <ListGroup>
                  <ListGroup.Item action onClick={onClickMypage}>My page</ListGroup.Item>
                  <ListGroup.Item action onClick={onClickLogout}>Logout</ListGroup.Item>
                </ListGroup>
              </Popover>
            }
          >
            {({ ref, ...triggerHandler }) => (
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  lineHeight: "38px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  color: "#fff",
                  textAlign: "center",
                  background: ConvertNameToRGB(userID),
                }}
                ref={ref}
                {...triggerHandler}
              >
                {userName[0]}
              </div>
            )}
          </OverlayTrigger>
      }
    </>
  );
}

export default ProfileButton;