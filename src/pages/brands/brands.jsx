import './style.css';
import {Container} from 'react-bootstrap';
import Header from '../../components/header/header';
import { useNavigate } from "react-router-dom";
import {useContext} from 'react';
import {ThemeContext} from '../../context/theme.context';

function Brands() {

    let navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const makeUpBrands = ["Clinique", "Covergirl", "Dior", "Maybelline", "NYX", "Revlon", "Smashbox"];

    return (
        <>
        <Header></Header>
        <Container fluid className={`main-container bg-${theme}`}>
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