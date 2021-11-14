import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from "jwt-decode";
import ConvertNameToRGB from '../utils/utils';

const MapMain = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const container = document.getElementById('map');
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    let token = localStorage.getItem('share-meal-token') || '';
    if (token != '') {
      var decoded = jwt_decode(token);
      setUserName(decoded.nickname);
    }
  }, []);


  return (
    <>
      <style type="text/css">
        {`
        .login-btn {
          background-color: purple;
          color: white;
          height: 40px;
          width: 40px;
        }
        `}
      </style>

      <div style={{
        width: "100%",
        minHeight: "100%",
        top: "56px",
        position: "fixed"
      }} id='map' />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="./">Share Meal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">List</Nav.Link>
              <NavDropdown title="Details" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Detail 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Detail 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Detail 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                disabled
              </Nav.Link>
            </Nav>
            {
              userName === ''
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
                  background: ConvertNameToRGB(userName),
                }}>{userName[0]}</div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MapMain;