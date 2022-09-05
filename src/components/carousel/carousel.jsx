import './style.css';
import Image1 from '../../images/img1.jpg';
import Image2 from '../../images/img2.jpg';
import Image3 from '../../images/img3.jpg';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
      <Carousel fade>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={Image1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={Image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={Image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default HomeCarousel;