import React from 'react'
import './Pricing.css'
import CardPrice from './CardPrice'
import PricingData from "../../data/Home/Pricing.json"

function Pricing() {

  return (
    <>
      <div className="outer-container">
        <div className="container">
          <h1 className="pricing-heading">Pricing Plans</h1>
          <div className='card'>
          { 
            PricingData.map((item) => { return <CardPrice heading={item.heading} points={item.points} btn_text={item.btn_text} btn_style={item.btn_style}/> })
          } 
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing


