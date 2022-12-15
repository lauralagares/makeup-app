import './Style.css';
import { Navbar, Container, Form } from 'react-bootstrap';
import { GiShoppingCart } from 'react-icons/gi';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/Theme.Context';
import { CartContext } from '../../Context/Cart.Context';
import { useNavigate } from 'react-router-dom';

function Header() {

  let navigate = useNavigate();

  const { toggleTheme } = useContext(ThemeContext);
  const { totalProducts } = useContext(CartContext);

  return (
    <Navbar className="bg-dark" expand="lg">
      <div className='nav-container'>
        <Navbar.Brand onClick={() => navigate("/")}>
          <h1 className='header-item'> VIRTUAL MAKE-UP STORE</h1>
        </Navbar.Brand>

        <Navbar.Brand className='d-flex gap-3 prueba'>

          <div onClick={() => navigate("/cart")} className='header-item'>
            <GiShoppingCart className='cart-icon'></GiShoppingCart>
            {totalProducts() === 0
              ? ''
              : <div className="total-products">{totalProducts()}</div>}
          </div>

          <Form className="d-flex" style={{ alignItems: 'center' }}>
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={toggleTheme}
            />
            🌛
          </Form>

        </Navbar.Brand>
      </div>
    </Navbar>
  )
}

export default Header;