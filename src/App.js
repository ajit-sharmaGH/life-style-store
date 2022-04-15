import { Cart } from "./pages/cartPage/cartPage.js";
import { Wishlist } from "./pages/wishlistPage/wishlistPage.js";
import { Home } from "./pages/homePage/home.js";
import {Login} from './pages/authPages/login.js'
import {Signup} from './pages/authPages/signup.js'
import { Products } from "./pages/productsPage/productsPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
