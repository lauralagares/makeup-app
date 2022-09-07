import './style.css';
import {Container} from 'react-bootstrap';
import Header from '../../components/header/header';
import { useNavigate } from "react-router-dom";

function Brands() {

    let navigate = useNavigate();

    const makeUpBrands = ["Clinique", "Covergirl", "Dior", "Maybelline", "NYX", "Revlon", "Smashbox"];

    return (
        <>
        <Header></Header>
        <Container className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            {
                makeUpBrands.map((b,i) => 
                <div className='brand-container'
                    onClick={()=> navigate(`/brands_products/${b}`)}
                    key={i}><h1>{b}</h1></div>)
            }
        </Container>
        </>
    )
}

export default Brands