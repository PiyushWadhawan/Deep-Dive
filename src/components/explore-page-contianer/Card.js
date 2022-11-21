import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ id, image, heading, type, description }) {
  return (
    <div className="outer_card_wall">
        <div className="card_image_container">
            <img className="card_image" src={image} alt="pic" />
        </div>
        <div className="card_content">
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
        <div className="card_button_type">
            <h5 className='type'>{type}</h5>
            <Link>
                <button className='card_button'>View Roadmap</button>
            </Link>
        </div>
    </div>
  )
}

export default Card
