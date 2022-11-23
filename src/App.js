import React from 'react';
import './App.css';
import Navbar from './components/shared-components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore'
import Roadmap from './pages/Roadmap'
import Footer from './components/shared-components/Footer';
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
        <Route path='/explore' element={<Explore />}/>
        <Route path='/roadmap/:career_id' element={<Roadmap />}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
