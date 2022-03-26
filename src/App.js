import {Cart} from './pages/cartPage/cartPage.js';
import {Home} from "./pages/homePage/home.js";
import {Products} from './pages/productsPage/productsPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   
   <Router>
  <Routes>
     <Route path='/' element={ <Home /> } />
     <Route path='/cart' element={ <Cart />}/>
     <Route path='/products' element={ <Products />}/>
     </Routes>
    </Router>

  );
}
export default App;
