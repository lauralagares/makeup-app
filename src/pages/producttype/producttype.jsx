import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import useFetch from "../../data/useFetch";
import ProductCard from "../../components/productcard/productcard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductType() {

    const {name} = useParams();

    const { data, error, loading } = useFetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${name}`);
    console.log(data);

    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <Container className="d-flex flex-wrap justify-content-center gap-3">
                {loading && <p>Loading...</p>}
                {error && <p>Something went wrong...</p>}
                {data.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}
            </Container>
        </>
    )
}

export default ProductType