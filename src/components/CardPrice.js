import React from 'react'
import './CardPrice.css'

function CardPrice({heading, points}) {
  return (
    <>

      <div className="card-container">

        <h1 className='card-heading'>{heading}</h1>
        
        <ul className='card-point'>
          {points.map((item) => <li className='point'>{item.p}</li>)}
        </ul>

      </div>

    </>
  )
}

export default CardPrice
