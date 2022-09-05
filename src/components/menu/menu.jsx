import './style.css';
import { Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Menu() {

    let navigate = useNavigate();

    return (
        <Nav className="menu-container">
            <span onClick={()=>navigate("/brands")}>BRANDS</span>
            <span onClick={()=>navigate("/blush")}>BLUSH</span>
            <span onClick={()=>navigate("/bronzer")}>BRONZER</span>
            <span onClick={()=>navigate("/eyebrow")}>EYEBROW</span>
            <span onClick={()=>navigate("/eyeliner")}>EYELINER</span>
            <span onClick={()=>navigate("/eyeshadow")}>EYESHADOW</span>
            <span onClick={()=>navigate("/foundation")}>FOUNDATION</span>
            <span onClick={()=>navigate("/lipliner")}>LIP LINER</span>
            <span onClick={()=>navigate("/lipstick")}>LIPSTICK</span>
            <span onClick={()=>navigate("/mascara")}>MASCARA</span>
            <span onClick={()=>navigate("/nailpolish")}>NAIL POLISH</span>
        </Nav>
    )
}

export default Menu