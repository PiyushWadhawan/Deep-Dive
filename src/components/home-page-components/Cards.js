import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import CardData from '../../Data/HomePage/Cards.json'

function Cards() {

    const topCards = CardData.filter((item) => { return item.top === true })
    const bottomCards = CardData.filter((item) => { return item.top === false })

  return (
    <div className='cards'>
        <h1 className='cards_heading'>Services we offer</h1>
        <div className="cards_container">
            <div className="cards_cards_wrapper">
                <ul className="cards_items">
                    {
                        topCards.map((item) => <CardItem image={item.image} text={item.text} label={item.label} path={item.path}/>)
                    }
                </ul>
                <ul className="cards_items">
                    {
                        bottomCards.map((item) => <CardItem image={item.image} text={item.text} label={item.label} path={item.path}/>)
                    }    
                </ul>
            </div>
        </div>
        <h5 id="howitworks" style={{"textAlign": "center", "color": "rgb(240, 240, 245)"}}>___________________________________________________________________________________</h5>
    </div>
  )
}

export default Cards
