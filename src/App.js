import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductType from './Pages/ProductType/ProductType';
import BrandProducts from './Pages/BrandProducts/BrandProducts';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './Context/Theme.Context';
import { CartProvider } from './Context/Cart.Context';

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
