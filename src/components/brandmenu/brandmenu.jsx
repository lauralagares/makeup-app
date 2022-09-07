import './style.css';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BrandMenu() {

    let navigate = useNavigate();

    const makeUpBrands = ["Clinique", "Covergirl", "Dior", "Maybelline", "NYX", "Revlon", "Smashbox"];

  return (
    <Nav className="brand-menu-container">
        {makeUpBrands.map( (b, i) => <span
         onClick={() => navigate(`/brands_products/${b}`)}
         key={i}>{b}</span>)}
    </Nav>
  )
}

export default BrandMenu