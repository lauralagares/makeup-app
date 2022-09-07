import Header from "../../components/header/header";
import useFetch from "../../data/useFetch";
import ProductCard from "../../components/productcard/productcard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BrandMenu from "../../components/brandmenu/brandmenu";


function BrandProducts() {

  const {brand} = useParams();

  const { data, error, loading } = useFetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
  console.log(data);

  return (
    <>
    <Header></Header>
    <BrandMenu></BrandMenu>
    <Container className="d-flex flex-wrap justify-content-center gap-3">
                {loading && <p>Loading...</p>}
                {error && <p>Something went wrong...</p>}
                {data.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}
            </Container>
    </>
  )
}

export default BrandProducts