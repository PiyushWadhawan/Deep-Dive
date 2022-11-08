import React from 'react'
import './Pricing.css'
import CardPrice from './CardPrice'

function Pricing() {
  return (
    <>
      <div className="outer-container">
        <div className="container">
          <h1 className="pricing-heading">Pricing Plans</h1>
          <div className='card'>
            <CardPrice heading={"Standard"} points={[{p: "Custom Test"}, {p: "Explore Feature"}, {p: "Customized Career Options"}, {p: "Career Roadmap"}]} btn_text={'Free'} btn_style={'light'} />
            <CardPrice heading={"Premium"} points={[{p: "Custom Test"}, {p: "Explore Feature"}, {p: "Customized Career Options"}, {p: "Career Roadmap"}, {p: "Access to Resources"}, {p: "Mentorship"}]} btn_text={'Paid'} btn_style={"dark"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing


