import { Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Menu() {

    let navigate = useNavigate();

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
        <Nav className="menu-container bg-dark">

            {arrayProducts.map((p, i) =>
                <span key={i} onClick={() => navigate(`/product_type/${p.productParam}`)}>{p.productName}</span>)
            }

        </Nav>
    )
}

export default Menu