import './Style.css';
import { Card } from 'react-bootstrap';
import {useContext} from 'react';
import { CartContext } from '../../Context/Cart.Context';

function ProductCard({ product }) {

  let {addProduct, isInCart} = useContext(CartContext);
  let productImage = product.image_link;

  let productName = product.name.split(" ", 3);
  let shortProductName = productName.join(" ");
  
 

  const handleError = (e) => {
    e.target.src = "https://cdn.dribbble.com/users/1314233/screenshots/6081627/media/8809f8695b8adb03a571b0dd66a220ea.jpg?compress=1&resize=1200x900&vertical=top"
    e.onError = null;
  }

  const handleAdd = () => {
    addProduct(product,1)
    console.log(product)
  }

  return (
    <Card className='card-container'>
      <Card.Img variant="top" src={productImage} className="card-image"
        onError={handleError} alt={product.name} />
      <section className='card-body-container'>

          <p className='text-capitalize text-center'> {shortProductName}</p>
    
          <p className="text-uppercase">{product.brand}</p>

          <p>${product.price}</p>

          <div className='colors-info'>
            {product.product_colors.slice(0,4).map((c, i) =>
              <div key={i}
              style={{backgroundColor: c.hex_value}}></div>)
            }
          </div>

          {
            isInCart(product.id) === true
            ? <button className="button-add-2"><span>ADDED TO CART</span></button>
            : <button className="button-add-1" onClick={handleAdd}><span>ADD TO CART</span></button>
          }
  
      </section>
    </Card>
  )
}

export default ProductCard