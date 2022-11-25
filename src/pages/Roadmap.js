import React from 'react'
import { useParams } from 'react-router-dom'
import RoadMapContainer from '../components/explore-page-contianer/RoadMapContainer';
import RoadmapData from '../data/Roadmap/RoadMap.json'

function Roadmap() {

  const { heading, career_id } = useParams();

  return (
    <div style={{ 'paddingTop': "4rem", 'paddingBottom': "6rem", "backgroundColor": "black", "color": "aqua" }}>
      <h1 style={{"paddingBottom": "1rem"}}>Roadmap for {heading}</h1>
      {
        RoadmapData[career_id].map((item) => <RoadMapContainer point = {item.point} resources={item.resources}/>)
      }
      <div style={{"width": "0", "height": "4rem","border-left": "2px solid white", "border-right": "2px solid white", "border-top": "", "margin": "0 auto"}}>
      </div>
      <div className='down-arrow' style={{"width": "0", "height": "0","border-left": "25px solid transparent","border-right": "25px solid transparent", "border-top": "50px solid white", "margin": "0 auto"}}>
      </div>
    </div>
  )
}

export default Roadmap
