import './style.css';
import { Navbar, Container, Form } from 'react-bootstrap';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunnySharp } from 'react-icons/io5';
import { HiShoppingBag } from 'react-icons/hi';
import {useContext} from 'react';
import {ThemeContext} from '../../context/theme.context';
import {useNavigate} from 'react-router-dom';

function Header() {

  let navigate = useNavigate();

  const {toggleTheme} = useContext(ThemeContext);

  return (
    <Navbar className="header-background" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <h1 className='text-light'>Make Up </h1>
        </Navbar.Brand>

        <Navbar.Brand onClick={() => navigate("/cart")}>
        <HiShoppingBag className='text-light'></HiShoppingBag>
        </Navbar.Brand>

        <Navbar.Brand className='d-flex'>

          <Form className="d-flex"
            style={{ alignItems: 'center' }}>
            <IoSunnySharp className='me-2 text-warning'></IoSunnySharp>
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={toggleTheme}
            />
            <BsFillMoonStarsFill className='text-warning'></BsFillMoonStarsFill>
          </Form>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;