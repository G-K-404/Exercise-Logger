import Navbar from './Navbar.jsx'
import Middle from './Middle.jsx'
import Hero from './hero.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  return (
  <>
      <Navbar/>
      {/* <div className="main-body">
      <Middle/>
      </div> */}
      <Hero/>
  </>
  );
}

export default App