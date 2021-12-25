import Button from 'react-bootstrap/Button'
import { OverlayTrigger, Popover, ListGroup } from 'react-bootstrap';
import { ConvertNameToRGB } from '../utils/CommonUtils';

const ProfileBtnView = ({ userName, userID, onClickMypage, onClickLogout }) => {
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

export default ProfileBtnView;
