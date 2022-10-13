import './style.css';
import Nav from 'react-bootstrap/Nav'; 
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';

function Footer() {
  return (
    <Nav className="footer-background">
      <section>
        <h1>COMPANY</h1>
        <p>About Us</p>
        <p>Store Locator</p>
        <p>Faqs</p>

      </section>

      <section>
        <h1>CUSTOMER SUPPORT</h1>
        <p>Contact Us</p>
        <p>Shipping Info</p>
        <p>Returns</p>
        <p>Track Your Order</p>
      </section>
    
      <section>
        <h1>CONNECT WITH US </h1>
        <p><BsInstagram></BsInstagram></p>
        <p><BsFacebook></BsFacebook></p>
        <p><BsTwitter></BsTwitter></p>
        <p><FaTiktok></FaTiktok></p>
      </section>
    </Nav>
  )
}

export default Footer