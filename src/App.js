import "./components/navbar/navbar.css";
// import {LandingPage} from "./pages/landing-page.jsx"

import { Navbar } from "./components/navbar/navbar.js";
function App() {
  return (
    <div>
      <img id="bg-img" src="https://i.ibb.co/bQHd3Sd/intro-bg-1.jpg" alt="" />

      <div>
        <Navbar />
      </div>
    </div>
  );
}
export default App;
