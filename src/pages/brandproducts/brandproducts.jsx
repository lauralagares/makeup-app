import Header from "../../Components/Header/Header";
import useFetch from "../../Data/useFetch";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loader from "../../Components/Loader/Loader";
import { Container, Nav } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {useContext} from 'react';
import {ThemeContext} from '../../Context/theme.context';

function BrandProducts() {

  let navigate = useNavigate();

  const makeUpBrands = ["Clinique", "Covergirl", "Dior", "Glossier", "Maybelline", "NYX", "Revlon", "Smashbox"];
  const {brand} = useParams();
  const {theme} = useContext(ThemeContext);
  const { data, error, loading } = useFetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);

  return (
    <>
    <Header></Header>
    <Nav className="menu-container text-uppercase">
        {makeUpBrands.map( (b, i) => <span
         onClick={() => navigate(`/brands_products/${b}`)}
         key={i}>{b}</span>)}
    </Nav>
    <Container fluid className={`main-container bg-${theme}`}>
                {loading && <Loader></Loader>}
                {error && <p>Something went wrong...</p>}
                <div className="products-container">
                  {data.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}
                </div>
               
            </Container>
    </>
  )
}

export default BrandProducts