import React from 'react'
import '../App.css'
import Cards from '../components/home-page-components/Cards'
import IntroPage from '../components/home-page-components/IntroPage'
import Pricing from '../components/home-page-components/Pricing'
import InfoBox from '../components/home-page-components/InfoBox'

import HomeData from '../Data/HomePage/InfoBox.json'
 
function Home({ background, changeBackground }) {

  return (
    <>
      <IntroPage background={background} changeBackground={changeBackground}/>
      <Cards/>
      {
        HomeData.map((item) => <InfoBox heading={item.heading} points={item.points} format={item.format} image={item.image} altimage={item.altimage}/>)
      }
      <Pricing/>
    </>
  )
}

export default Home
