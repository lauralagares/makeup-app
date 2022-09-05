import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Brands from './pages/brands/brands';
import Blush from './pages/blush/blush';
import Bronzer from './pages/bronzer/bronzer';
import Eyebrow from './pages/eyebrow/eyebrow';
import Eyeliner from './pages/eyeliner/eyeliner';
import Eyeshadow from './pages/eyeshadow/eyeshadow';
import Foundation from './pages/foundation/foundation';
import Lipliner from './pages/lipliner/lipliner';
import Lipstick from './pages/lipstick/lipstick';
import Mascara from './pages/mascara/mascara';
import Nailpolish from './pages/nailpolish/nailpolish';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/brands" element={<Brands></Brands>}/>
      <Route path="/blush" element={<Blush></Blush>}/>
      <Route path="/bronzer" element={<Bronzer></Bronzer>}/>
      <Route path="/eyebrow" element={<Eyebrow></Eyebrow>}/>
      <Route path="/eyeliner" element={<Eyeliner></Eyeliner>}/>
      <Route path="/eyeshadow" element={<Eyeshadow></Eyeshadow>}/>
      <Route path="/foundation" element={<Foundation></Foundation>}/>
      <Route path="/lipliner" element={<Lipliner></Lipliner>}/>
      <Route path="/lipstick" element={<Lipstick></Lipstick>}/>
      <Route path="/mascara" element={<Mascara></Mascara>}/>
      <Route path="/nailpolish" element={<Nailpolish></Nailpolish>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
