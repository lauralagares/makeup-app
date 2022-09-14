import './style.css';
import Ad from '../../components/ad/ad';
import Header from '../../components/header/header';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ThemeContext } from '../../context/theme.context';
import { Container } from 'react-bootstrap';
import CartItem from '../../components/cartItem/cartItem';

function ShoppingCart() {

  const { theme, fontColor } = useContext(ThemeContext);
  const { cart, totalPrice } = useContext(CartContext);
  console.log(cart)

  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Container fluid className={`cart-grid-container bg-${theme} text-${fontColor}`}>  

        <div className="cart-grid-item grid-item-1">
          {cart.map(e => <CartItem key={e.id} product={e}></CartItem>
          )}
        </div>
        <div className="cart-grid-item grid-item-2">
          <section><p>ORDER SUMMARY</p></section>
          <section>
            <span>ADD A PROMO CODE</span>
            <span>+</span>
          </section>
          <section>
            <span>SUBTOTAL</span> 
            <span>${totalPrice()}</span>
          </section>
          <section>
            <span>SHIPPING </span>
            <span>$20</span>
          </section>
         
          {
            cart.length === 0 
            ?  ""

            : <section>
                <span>TOTAL</span>
                <span>${totalPrice() > 100 ? totalPrice() : totalPrice() + 20}</span>
              </section>
          }
          

          <div className ="checkout-button">
          <button>PROCEED TO CHECKOUT</button>
          </div>

        </div>

      </Container>
    </>
  )
}

export default ShoppingCart