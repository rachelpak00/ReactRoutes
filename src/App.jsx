import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from './components/Green';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
     <div id="container">
      <NavBar />
    <div id="main-section">
      <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route path='/blue' element={<Blue />} />
        <Route path='/red' element={<Red />} />
        <Route path='/green' element={<Green />} />
      </Routes>
      </div>
     </div>
  )
}

export default App
