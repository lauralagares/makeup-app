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

  let subTotalPrice = totalPrice().toFixed(2);
  let totalPlusShipping = totalPrice() + 20;

  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Container fluid className={`cart-grid-container bg-${theme} text-${fontColor}`}>  

        <div className="cart-grid-item grid-item-1">
          {
            cart.length === 0 
            ? <div>
                <p>Your bag is empty.</p>
                <p>CONTINUE SHOPPING</p>
              </div>
            : cart.map(e => <CartItem key={e.id} product={e}></CartItem>
          )
          }
        </div>
        <div className="cart-grid-item grid-item-2">
          <p>ORDER SUMMARY</p>
          <section>
            <span>Add a promo code</span>
            <span>+</span>
          </section>
          <section>
            <span>Subtotal</span>
            <span>${subTotalPrice}</span>
          </section>
          <section>
            <span>Shipping</span>
            <span>$20</span>
          </section>
         
          {
            cart.length === 0 
            ?  ""

            : <section>
                <span>TOTAL</span>
                <span>${subTotalPrice > 100 ? subTotalPrice : totalPlusShipping.toFixed(2)}</span>
              </section>
          }
          
          <div className ="checkout-button">
          <button><span>PROCEED TO CHECKOUT</span></button>
          </div>

        </div>

      </Container>
    </>
  )
}

export default ShoppingCart