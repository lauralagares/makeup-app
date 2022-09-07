import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Brands from './pages/brands/brands';
import ProductType from './pages/producttype/producttype';
import BrandProducts from './pages/brandproducts/brandproducts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/brands" element={<Brands></Brands>}/>
      <Route path="/product_type/:name" element={<ProductType></ProductType>}/>
      <Route path="/brands_products/:brand" element={<BrandProducts></BrandProducts>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
