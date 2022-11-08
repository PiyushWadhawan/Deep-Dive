import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import IntroPage from '../components/IntroPage'
import Pricing from '../components/Pricing'

function Home() {
  return (
    <>
      <IntroPage/>
      <Cards/>
      <Pricing/>
    </>
  )
}

export default Home
