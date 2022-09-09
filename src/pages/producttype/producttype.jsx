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
    console.log(data);

    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <Container fluid className={`d-flex flex-wrap justify-content-center gap-3 pt-4 bg-${theme}`}>
                {loading && <Loader></Loader>}
                {error && <p>Something went wrong...</p>}
                {data.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}
            </Container>
        </>
    )
}

export default ProductType