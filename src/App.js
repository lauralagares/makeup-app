import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import ProductType from './pages/productType/productType';
import BrandProducts from './pages/brandProducts/brandProducts';
import ShoppingCart from './pages/shoppingCart/shoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '../src/context/theme.context';
import { CartProvider } from '../src/context/cart.context';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/product_type/:name" element={<ProductType></ProductType>} />
            <Route path="/brands_products/:brand" element={<BrandProducts></BrandProducts>}/>
            <Route path="/cart" element={<ShoppingCart></ShoppingCart>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
