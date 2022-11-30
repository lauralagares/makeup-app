import './Style.css';
import { Navbar, Container, Form } from 'react-bootstrap';
import {GiShoppingCart} from 'react-icons/gi';
import {useContext} from 'react';
import {ThemeContext} from '../../Context/Theme.Context';
import { CartContext } from '../../Context/Cart.Context';
import {useNavigate} from 'react-router-dom';

function Header() {

  let navigate = useNavigate();

  const {toggleTheme} = useContext(ThemeContext);
  const {totalProducts} = useContext(CartContext);

  return (
    <Navbar className="header-background" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <h1 className='header-item'>MAKE UP</h1>
        </Navbar.Brand>

        <Navbar.Brand onClick={() => navigate("/cart")} className='header-item'>
        <GiShoppingCart className='cart-icon'></GiShoppingCart>
        {totalProducts() === 0 
        ? ''
        : <div className="total-products">{totalProducts()}</div>}
        
        </Navbar.Brand>

        <Navbar.Brand className='d-flex'>

          <Form className="d-flex" style={{ alignItems: 'center' }}>
        
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={toggleTheme}
            />
            🌛
          </Form>
          
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;