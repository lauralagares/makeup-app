import './style.css';
import { Card } from 'react-bootstrap';
import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';

function ProductCard({ product }) {

  let {addProduct} = useContext(CartContext);
  let productImage = product.image_link;

  const handleError = (e) => {
    e.target.src = "https://cdn.dribbble.com/users/1314233/screenshots/6081627/media/8809f8695b8adb03a571b0dd66a220ea.jpg?compress=1&resize=1200x900&vertical=top"
    e.onError = null;
  }

  const handleAdd = () => {
    addProduct(product,1)
    console.log(product)
  }

  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={productImage} className="card-image"
        onError={handleError} />
      <Card.Body className='card-body-container'>

          <Card.Title className='text-capitalize text-center'>{product.name}</Card.Title>
          
        <section className='product-info'>
          <p className="text-uppercase">{product.brand}</p>
          <p>${product.price}</p>
          <div className='colors-info'>
            {product.product_colors.slice(0,4).map((c, i) =>
              <div key={i}
              style={{backgroundColor: c.hex_value}}></div>)
            }
          </div>
          <button onClick={handleAdd}>ADD TO CART</button>
        </section>
      </Card.Body>
    </Card>
  )
}

export default ProductCard