import Header from '../../components/header/header';
import {useContext} from 'react';
import {CartContext} from '../../context/cart.context'

function ShoppingCart() {

    const {cart} = useContext(CartContext);
    console.log(cart)


  return (
    <>
    <Header></Header>
    {cart.map(e => <p key={e.id}>
        <img src={e.image_link} alt="product" width={'50px'} />
    </p>)}
    </>
  )
}

export default ShoppingCart