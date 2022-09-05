import './style.css';
import {Container} from 'react-bootstrap';
import Header from '../../components/header/header';

function Brands() {

    const makeUpBrands = ["Anabelle", "Cargo", "Clinique", "Covergirl", "Dior", "Loreal", "Maybelline", "NYX", "Revlon", "Smashbox"];

    return (
        <>
        <Header></Header>
        <Container>
            {
                makeUpBrands.map((b,i) => <p key={i}>{b}</p>)
            }
        </Container>
        </>
    )
}

export default Brands