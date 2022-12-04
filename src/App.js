import React from 'react';
import './App.css';
import Navbar from './components/shared-components/Navbar';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import {useLayoutEffect} from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore'
import Roadmap from './pages/Roadmap'
import Test from './pages/Test'
import Error from './pages/Error';
import Footer from './components/shared-components/Footer';
import { useState } from 'react';
import PricingModel from './pages/PricingModel';

const Wrapper = ({children}) => {

  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children

} 

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
    <Wrapper>
      
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home background={background} changeBackground={changeBackground}/>}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/roadmap/:heading/:career_id' element={<Roadmap />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/pricing' element={<PricingModel />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>

      <Footer/>

      </Wrapper>
    </Router>
    </>
  );
}

export default App;
