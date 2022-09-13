import './style.css';
import { Navbar, Container, Form } from 'react-bootstrap';
import { HiShoppingBag } from 'react-icons/hi';
import {useContext} from 'react';
import {ThemeContext} from '../../context/theme.context';
import { CartContext } from '../../context/cart.context';
import {useNavigate} from 'react-router-dom';

function Header() {

  let navigate = useNavigate();

  const {toggleTheme} = useContext(ThemeContext);
  const {totalProducts} = useContext(CartContext);

  return (
    <Navbar className="header-background" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <h1 className='header-item text-light'>Make Up</h1>
        </Navbar.Brand>

        <Navbar.Brand onClick={() => navigate("/cart")}>
        <HiShoppingBag className='header-item text-light'></HiShoppingBag>
        {totalProducts() === 0 
        ? ''
        : <div className="total-products">{totalProducts()}</div>}
        
        </Navbar.Brand>

        <Navbar.Brand className='d-flex'>

          <Form className="d-flex"
            style={{ alignItems: 'center' }}>
            🌛
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={toggleTheme}
            />
          </Form>
          
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;