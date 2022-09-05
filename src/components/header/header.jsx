import './style.css';
import { Navbar, Container, Form } from 'react-bootstrap';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunnySharp } from 'react-icons/io5';

function Header() {
  return (
    <Navbar className="header-background" expand="lg">
      <Container fluid>
        <Navbar.Brand className='d-flex'>

          <Form className="d-flex"
            style={{ alignItems: 'center' }}>
            <IoSunnySharp className='me-2 text-warning'></IoSunnySharp>
            <Form.Check
              type="switch"
              id="custom-switch"
              // onClick={toggleTheme}
            />
            <BsFillMoonStarsFill className='text-warning'></BsFillMoonStarsFill>
          </Form>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;