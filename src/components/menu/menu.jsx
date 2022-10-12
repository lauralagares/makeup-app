import { Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {

    let navigate = useNavigate();

    const makeUpBrands = ["Clinique", "Covergirl", "Dior", "Glossier", "Maybelline", "NYX", "Revlon", "Smashbox"];

    let arrayProducts = [
        {
            productName: "BLUSH",
            productParam: "blush"
        },
        {
            productName: "BRONZER",
            productParam: "bronzer"
        },
        {
            productName: "EYEBROW",
            productParam: "eyebrow"
        },
        {
            productName: "EYELINER",
            productParam: "eyeliner"
        },
        {
            productName: "EYESHADOW",
            productParam: "eyeshadow"
        },
        {
            productName: "FOUNDATION",
            productParam: "foundation"
        },
        {
            productName: "LIP LINER",
            productParam: "lip_liner"
        },
        {
            productName: "LIPSTICK",
            productParam: "lipstick"
        },
        {
            productName: "MASCARA",
            productParam: "mascara"
        },
        {
            productName: "NAIL POLISH",
            productParam: "nail_polish"
        }
    ];

    return (
        <Nav className="menu-container">

            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic"className='fw-bold'>
                    BRANDS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {makeUpBrands.map((b, i) =>
                            <Dropdown.Item key={i}
                                onClick={() => navigate(`/brands_products/${b}`)}>
                                <p>{b}</p>
                            </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>

            {arrayProducts.map((p, i) =>
                <span key={i} onClick={() => navigate(`/product_type/${p.productParam}`)}>{p.productName}</span>)
            }
        </Nav>
    )
}

export default Menu