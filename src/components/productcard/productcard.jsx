import './style.css';
import {Card} from 'react-bootstrap'

function ProductCard({product}) {

  let productImage = product.image_link;

  const handleError = (e) => {
  e.target.src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
  e.onError = null;
  }

  return (
    <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={productImage}
    onError={handleError}/>
    <Card.Body>
      <Card.Title className='text-capitalize'>{product.name}</Card.Title>
      <Card.Title className='text-uppercase'>{product.brand}</Card.Title>
      {/* <Card.Text>{product.brand}</Card.Text> */}
      <div>VIEW MORE DETAILS</div>
      <button>ADD TO CART</button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard