import React from 'react';
import './App.css';
import Header from './header.js';
import Home from './home';
import About from './About';
import Contact from './Contact';

import { BrowserRouter , Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>


    </Routes>
     
    
    
    </BrowserRouter>
     
  );
}

export default App;
