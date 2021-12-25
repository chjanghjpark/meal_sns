import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import ProfileBtnContainer from './ProfileBtnContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarCommon = () => {
  return (
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
            <Nav.Link href="/list">List</Nav.Link>
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
          <ProfileBtnContainer />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCommon;
