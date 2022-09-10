import './style.css';
import Ad from '../../components/ad/ad';
import HomeCarousel from '../../components/carousel/carousel';
import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import { Container } from 'react-bootstrap';
import {useContext} from 'react';
import {ThemeContext} from '../../context/theme.context';

function Home() {

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Ad></Ad>
      <Header></Header>
      <Menu></Menu>

      <Container fluid className={`bg-${theme}`}>

        <HomeCarousel></HomeCarousel>

      </Container>

      <Footer></Footer>
    </>
  )
}

export default Home