import React from 'react'
import './CardPrice.css'
import { Link } from 'react-router-dom'

function CardPrice({ heading, points, btn_text, btn_style }) {
  return (
    <>

      <div className="card-container">

        <h1 className='card-heading'>{heading}</h1>
        
        <div className="btn-spacing">

          <ul className='card-point'>
            {points.map((item) => <li className='point' key={item.p}>{item.p}</li>)}
          </ul>
  
          <div style={{width: '40%' ,textAlign: 'center', padding: '1rem'}}>
            <Link to="/pricing" className={`btn-price , ${btn_style}`}>
              {btn_text}
            </Link>
          </div>
        
        </div>
      </div>

    </>
  )
}

export default CardPrice
