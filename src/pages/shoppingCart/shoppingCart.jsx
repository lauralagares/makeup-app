import Ad from '../../components/ad/ad';
import Header from '../../components/header/header';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {ThemeContext} from '../../context/theme.context';
import { Container } from 'react-bootstrap';
import CartItem from '../../components/cartItem/cartItem';

function ShoppingCart() {

  const {theme} = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  console.log(cart)


  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Container fluid className={`bg-${theme}`}>
        {cart.map(e => <CartItem key={e.id} product={e}></CartItem>
        )}
      </Container>
    </>
  )
}

export default ShoppingCart