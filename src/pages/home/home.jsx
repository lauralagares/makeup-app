import './style.css';
import HomeCarousel from '../../components/carousel/carousel';
import Ad from '../../components/ad/ad';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Menu></Menu>

      <Container>

        <HomeCarousel></HomeCarousel>

      </Container>

      <Footer></Footer>
    </>
  )
}

export default Home