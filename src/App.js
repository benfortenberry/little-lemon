import './css/App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./components/Main.js";
import Details from "./pages/booking/Details.js";
import Confirmation from "./pages/booking/Confirmation.js";
import {Routes , Route } from "react-router-dom" 
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='container'>


      <br />
      <Header />

      <Routes> 
            <Route path="/" element={<Home/> } /> 
            <Route path="/about" element={<About/> } /> 
            <Route path="/contact" element={<Contact/> } /> 
            <Route path="/reservation" element={<Main/> } /> 
            <Route path="/Details" element={<Details/> } /> 
            <Route path="/Confirmation" element={<Confirmation/> } /> 
       </Routes> 

      <Footer />
    </div>
  );
}

export default App;
