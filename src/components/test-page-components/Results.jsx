import React from 'react'
import Card from '../explore-page-contianer/Card'
import '../explore-page-contianer/CardArea.css'
import CARD_DATA from '../../data/Explore/Jobs.json'

function Results() {

        const careers_after_test = CARD_DATA.filter((item) => {
            return item.type.toLowerCase() === "sports" || item.type.toLowerCase() === "engineering";
        })


  return (
    <div className="explore_div" >

        <div className="cardarea_container">
            { 
                careers_after_test.map(item => <Card key={item.id} id={item.id} image={item.image} heading={item.heading} type={item.type} description={item.description} />)
            }
        </div>
    </div>
    
  )
}

export default Results
