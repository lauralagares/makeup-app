import './style.css';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
      <Carousel fade>

        <Carousel.Item className="carousel-img img-1"></Carousel.Item>

        <Carousel.Item className="carousel-img img-2"></Carousel.Item>

        <Carousel.Item className="carousel-img img-3"></Carousel.Item>
      </Carousel>
    );
  }
  
  export default HomeCarousel;