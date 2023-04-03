import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { Router , Routes ,Route} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Cart from './component/Cart';

function App() {
  return (
    
    <div className="App">
        
           <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
     
      </div>
    
   
  );
}

export default App;
