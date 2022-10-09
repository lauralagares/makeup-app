import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import useFetch from "../../data/useFetch";
import ProductCard from "../../components/productCard/productCard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import {useContext} from 'react';
import {ThemeContext} from '../../context/theme.context';

function ProductType() {

    const {name} = useParams();
    const {theme} = useContext(ThemeContext);
    const { data, error, loading } = useFetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${name}`);

    return (
        <>
            <Header></Header>
            <Menu></Menu>
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

export default ProductType