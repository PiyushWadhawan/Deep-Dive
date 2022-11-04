import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import IntroPage from '../components/IntroPage'


function Home() {
  return (
    <>
      <IntroPage/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home
