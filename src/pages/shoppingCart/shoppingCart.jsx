import './style.css';
import Ad from '../../components/ad/ad';
import Header from '../../components/header/header';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ThemeContext } from '../../context/theme.context';
import { Container } from 'react-bootstrap';
import CartItem from '../../components/cartItem/cartItem';

function ShoppingCart() {

  const { theme } = useContext(ThemeContext);
  const { cart, totalPrice } = useContext(CartContext);
  console.log(cart)

  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Container fluid className={`cart-grid-container bg-${theme}`}>  

        <div className="cart-grid-item grid-item-1">
          {cart.map(e => <CartItem key={e.id} product={e}></CartItem>
          )}
        </div>
        <div className="cart-grid-item grid-item-2">
          <p>Add a promo code +</p>
          <p>subtotal : ${totalPrice()}</p>
          <p>shipping : $20</p>
          {
            cart.length === 0 
            ?  ''
            :  <p>${totalPrice() >= 100 ? totalPrice() : totalPrice() + 20}</p>
          }
         
        </div>

      </Container>
    </>
  )
}

export default ShoppingCart