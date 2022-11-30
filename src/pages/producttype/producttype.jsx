import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import useFetch from "../../Data/useFetch";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import {useContext} from 'react';
import {ThemeContext} from '../../Context/theme.context';

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