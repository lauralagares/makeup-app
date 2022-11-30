import './Style.css';
import Ad from '../../Components/Ad/Ad';
import HomeCarousel from '../../Components/Carousel/Carousel';
import Header from '../../Components/Header/Header';
import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/theme.context';

function Home() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Menu></Menu>

      <Container fluid className={`bg-${theme} home-container`} >

        <div className='wrapper'>

          <div className='one'></div>
          <div className='two'>
            <HomeCarousel></HomeCarousel>
          </div>
          <div className='three'></div>

        </div>

      </Container>

      <Footer></Footer>
    </>
  )
}

export default Home