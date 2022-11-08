import React from 'react'
import './InfoBox.css'

function InfoBox({ heading, points, format, image }) {
  return (
    <>
      <div className={format === 'normal'? 'info-container' : 'info-container mirrored'}>
        
        <div className="pic">
            <img src={image} alt="pictures"/>
        </div>
        
        <div className="info">
            <h2>{heading}</h2>
            <ul>
                {points.map((item) => <li>{item.p}</li>)}
            </ul>
        </div>

      </div>
    </>
  )
}

export default InfoBox
