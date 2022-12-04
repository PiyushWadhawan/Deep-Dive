import React from 'react'
import Card from '../explore-page-contianer/Card'
import '../explore-page-contianer/CardArea.css'
import CARD_DATA from '../../data/Explore/Jobs.json'

function Results({data}) {

    let careers_after_test;

    if(data === 1)
    {
        careers_after_test = CARD_DATA.filter((item) => {
            return item.type.toLowerCase() === "finance" || item.type.toLowerCase() === "judicial" || item.type.toLowerCase() === "management";})
    }
    else if(data === 2)
    {
        careers_after_test = CARD_DATA.filter((item) => {
            return item.type.toLowerCase() === "engineering" || item.type.toLowerCase() === "medical" || item.type.toLowerCase() === "defense"})
    }
    else if(data === 3)
    {
        careers_after_test = CARD_DATA.filter((item) => {
            return item.type.toLowerCase() === "judicial" || item.type.toLowerCase() === "defense" || item.type.toLowerCase() === "sports" || item.type.toLowerCase() === "management" || item.type.toLowerCase() === "engineering";})
    }
    else
    {
        careers_after_test = CARD_DATA.filter((item) => {
            return item.type.toLowerCase() === "sports" || item.type.toLowerCase() === "arts" })
    }


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
