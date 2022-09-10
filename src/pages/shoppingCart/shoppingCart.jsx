import Ad from '../../components/ad/ad';
import Header from '../../components/header/header';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {ThemeContext} from '../../context/theme.context';
import { Container } from 'react-bootstrap';

function ShoppingCart() {

  const {theme} = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  console.log(cart)


  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Container fluid className={`main-container bg-${theme}`}>
        {cart.map(e => <p key={e.id}>
          <img src={e.image_link} alt="product" width={'100px'} />
        </p>)}
      </Container>
    </>
  )
}

export default ShoppingCart