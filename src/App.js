import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [background, changebackground] = useState(0)

    const changeBackground = () => {
        if(background === 0)
            changebackground(1)
        else if(background === 1)
            changebackground(0)
    }

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home background={background} changeBackground={changeBackground}/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
